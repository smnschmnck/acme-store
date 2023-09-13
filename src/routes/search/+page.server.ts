import { and, like } from 'drizzle-orm';
import type { PageServerLoad } from '../$types';
import { db } from '../../db/connection';
import { products } from '../../db/schema';
import { sortings } from './utils/sortings';
import { extractSearchParams, type SearchDataParams } from './utils/searchParams';

const getProducts = async ({ category, sorting, searchQuery }: SearchDataParams) => {
	const hasCategory = category !== 'All';
	sorting ??= 'popular';

	return await db.query.products.findMany({
		where: and(
			like(products.name, `%${searchQuery}%`),
			hasCategory ? like(products.category, `%${category}%`) : undefined
		),
		with: {
			seller: true
		},
		orderBy: sortings[sorting].config,
		limit: 25
	});
};

export const load: PageServerLoad = ({ url }) => {
	const searchParams = extractSearchParams(url.searchParams);

	return {
		products: getProducts(searchParams),
		searchData: searchParams
	};
};
