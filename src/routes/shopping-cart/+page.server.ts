import { getSession, getSessionId } from '$lib';
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
	const sessionId = await getSessionId(cookies);
	const session = await getSession(sessionId);
	if (!session) {
		return {
			products: []
		};
	}

	return {
		products: await getProducts(session.shoppingCart)
	};
};
