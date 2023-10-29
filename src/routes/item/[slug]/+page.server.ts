import { redirect } from '@sveltejs/kit';
import { db } from '../../../db/connection';
import type { Actions, PageServerLoad } from './$types';
import { productsToShoppingCarts } from '../../../db/schema';
import { z } from 'zod';
import { getSession } from '$lib';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';

const parseDescription = (description?: string | null) => {
	if (!description) {
		return '';
	}
	if (description.length <= 0) {
		return '';
	}

	const dangerousDescription = marked.parse(description ?? '');
	if (!window) {
		const window = new JSDOM('').window;
		const purify = DOMPurify(window);
		return purify.sanitize(dangerousDescription);
	}

	return DOMPurify.sanitize('<b>hello there</b>');
};

export const load: PageServerLoad = async ({ params, url }) => {
	const addedToCart = url.searchParams.get('addedToCart') as 'success' | 'failure' | undefined;
	const product = await db.query.products.findFirst({
		where: (products, { eq }) => eq(products.id, params.slug),
		with: {
			seller: true
		}
	});

	if (!product) {
		throw redirect(302, '/404');
	}

	return {
		addedToCart: addedToCart,
		product: {
			...product,
			description: parseDescription(product.description)
		}
	};
};

export const actions = {
	default: async ({ cookies, request, url }) => {
		const formData = request.formData();
		const formDataObj = Object.fromEntries((await formData).entries());
		const formSchema = z.object({
			productId: z.string().uuid(),
			amount: z.string().min(1).max(2)
		});
		const validation = formSchema.safeParse(formDataObj);
		if (!validation.success) {
			url.searchParams.set('addedToCart', 'failure');
			throw redirect(302, url);
		}

		try {
			const session = await getSession(cookies);
			if (!session) throw new Error('no session');

			await db
				.insert(productsToShoppingCarts)
				.values({
					productId: validation.data.productId,
					shoppingCartId: session.shoppingCart,
					amount: Number(validation.data.amount)
				})
				.onDuplicateKeyUpdate({
					set: {
						amount: Number(validation.data.amount)
					}
				});
		} catch (e) {
			console.log(e);
			url.searchParams.set('addedToCart', 'failure');
			throw redirect(302, url);
		}

		url.searchParams.set('addedToCart', 'success');
		throw redirect(302, url);
	}
} satisfies Actions;
