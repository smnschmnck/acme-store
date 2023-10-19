import { getSession } from '$lib';
import type { PageServerLoad } from '../$types';
import { db } from '../../db/connection';

const getProducts = async (shoppingCartId: string) => {
	const rows = await db.query.productsToShoppingCarts.findMany({
		where: (t, { eq }) => eq(t.shoppingCartId, shoppingCartId),
		with: { products: true }
	});

	return rows.map((q) => q.products);
};

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
