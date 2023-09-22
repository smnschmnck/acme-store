import { dev } from '$app/environment';
import { db } from '../db/connection';
import { products } from '../db/schema';
import type { LayoutServerLoad } from './$types';

export const prerender = false;
export const ssr = true;
export const csr = false;

const getProductCategories = async () => {
	return db.selectDistinct({ category: products.category }).from(products);
};

export const load: LayoutServerLoad = async ({ url }) => {
	const category = url.searchParams.get('category') ?? 'All';
	const searchQuery = url.searchParams.get('searchQuery') ?? '';
	const allCategories = (await getProductCategories()).map((c) => c.category);

	return {
		searchData: {
			allCategories,
			category,
			searchQuery
		}
	};
};
