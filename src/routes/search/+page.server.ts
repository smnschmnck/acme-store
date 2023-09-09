import { and, like } from 'drizzle-orm';
import type { PageServerLoad } from '../$types';
import { db } from '../../db/connection';
import { products } from '../../db/schema';

const getProducts = async (category: string, searchQuery: string) => {
	if (category === 'All') {
		return await db.query.products.findMany({
			where: like(products.name, `%${searchQuery}%`),
			with: {
				seller: true
			},
			limit: 25
		});
	}

	return await db.query.products.findMany({
		where: and(like(products.name, `%${searchQuery}%`), like(products.category, category)),
		with: {
			seller: true
		},
		limit: 25
	});
};

export const load: PageServerLoad = ({ url }) => {
	const category = url.searchParams.get('category') ?? '';
	const searchQuery = url.searchParams.get('searchQuery') ?? '';

	return {
		products: getProducts(category, searchQuery)
	};
};
