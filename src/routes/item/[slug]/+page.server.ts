import { redirect } from '@sveltejs/kit';
import { db } from '../../../db/connection';
import type { Actions, PageServerLoad } from './$types';
import { productsToShoppingCarts } from '../../../db/schema';
import { z } from 'zod';
import { getSession, getSessionId } from '$lib';

export const load: PageServerLoad = async ({ params, url }) => {
	const addedToCart = url.searchParams.get('addedToCart') as 'success' | 'failure' | undefined;
	return {
		addedToCart: addedToCart,
		product: await db.query.products.findFirst({
			where: (products, { eq }) => eq(products.id, params.slug),
			with: {
				seller: true
			}
		})
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
			const sessionId = await getSessionId(cookies);
			const session = await getSession(sessionId);
			if (!session) throw new Error('no session');

			await db.insert(productsToShoppingCarts).values({
				productId: validation.data.productId,
				shoppingCartId: session.shoppingCart
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
