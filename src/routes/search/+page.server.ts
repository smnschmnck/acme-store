import { and, like } from 'drizzle-orm';
import type { PageServerLoad } from '../$types';
import { db } from '../../db/connection';
import { products } from '../../db/schema';
import { normalizeSorting, sortings, type sortingsUnion } from './sortings';

const getProducts = async (
	category: string,
	searchQuery: string,
	sorting: sortingsUnion | null
) => {
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
	const category = url.searchParams.get('category') ?? '';
	const searchQuery = url.searchParams.get('searchQuery') ?? '';
	const sorting = normalizeSorting(url.searchParams.get('sorting'));

	return {
		products: getProducts(category, searchQuery, sorting),
		searchData: {
			category,
			searchQuery,
			sorting
		}
	};
};
