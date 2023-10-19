import { dev } from '$app/environment';
import type { Cookies } from '@sveltejs/kit';
import { db } from '../db/connection';
import { products, productsToShoppingCarts } from '../db/schema';
import type { LayoutServerLoad } from './$types';
import { getSession } from '$lib';
import { eq, sql } from 'drizzle-orm';

export const prerender = false;
export const ssr = true;
export const csr = dev;

const getProductCategories = async () => {
	return db.selectDistinct({ category: products.category }).from(products);
};

const getShoppingCartProductCount = async (cookies: Cookies) => {
	const session = await getSession(cookies);
	if (!session) {
		return 0;
	}
	const res = await db
		.select({ count: sql<number>`count(*)` })
		.from(productsToShoppingCarts)
		.where(eq(productsToShoppingCarts.shoppingCartId, session?.shoppingCart));

	const count = res.at(0)?.count ?? 0;
	return count;
};

export const load: LayoutServerLoad = async ({ url, cookies }) => {
	const category = url.searchParams.get('category') ?? 'All';
	const searchQuery = url.searchParams.get('searchQuery') ?? '';
	const allCategories = (await getProductCategories()).map((c) => c.category);

	return {
		searchData: {
			allCategories,
			category,
			searchQuery
		},
		shoppingCartProductCount: getShoppingCartProductCount(cookies)
	};
};
