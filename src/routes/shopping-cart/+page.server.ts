import { getSession } from '$lib';
import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { db } from '../../db/connection';
import { z } from 'zod';
import { productsToShoppingCarts } from '../../db/schema';
import { and, eq } from 'drizzle-orm';

const getProducts = async (shoppingCartId: string) => {
	const rows = await db.query.productsToShoppingCarts.findMany({
		where: (t, { eq }) => eq(t.shoppingCartId, shoppingCartId),
		with: {
			products: {
				with: {
					seller: true
				}
			}
		}
	});

	return rows.map((row) => ({ ...row.products, amount: row.amount }));
};

export const actions = {
	deleteProduct: async ({ request, url, cookies }) => {
		const session = await getSession(cookies);
		if (!session) {
			return;
		}

		const formData = await request.formData();
		const formDataObj = Object.fromEntries(formData.entries());
		const schema = z.object({
			productId: z.string().uuid()
		});
		const validated = schema.safeParse(formDataObj);

		if (!validated.success) {
			return;
		}

		await db
			.delete(productsToShoppingCarts)
			.where(
				and(
					eq(productsToShoppingCarts.shoppingCartId, session.shoppingCart),
					eq(productsToShoppingCarts.productId, validated.data.productId)
				)
			);

		throw redirect(302, url.pathname);
	}
} satisfies Actions;

export const load: PageServerLoad = async ({ cookies }) => {
	const session = await getSession(cookies);
	if (!session) {
		return {
			products: []
		};
	}

	return {
		products: await getProducts(session.shoppingCart)
	};
};
