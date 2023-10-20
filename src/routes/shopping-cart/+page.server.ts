import { getSession } from '$lib';
import type { PageServerLoad } from '../$types';
import { db } from '../../db/connection';

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
