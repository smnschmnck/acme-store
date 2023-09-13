import { and, eq, gt, like, lt } from 'drizzle-orm';
import type { PageServerLoad } from '../$types';
import { db } from '../../db/connection';
import { products } from '../../db/schema';
import { sortings } from './utils/sortings';
import { extractSearchParams, type SearchDataParams } from './utils/searchParams';

const getProducts = async ({
	category,
	searchQuery,
	sorting,
	productRating,
	minPrice,
	maxPrice,
	minSellerRating,
	maxSellerRating,
	filterCategories
}: SearchDataParams) => {
	const hasCategory = category !== 'All';

	const categoryQuery = filterCategories.map((c) => eq(products.category, c));

	const productsArray = await db.query.products.findMany({
		where: and(
			like(products.name, `%${searchQuery}%`),
			hasCategory ? like(products.category, `%${category}%`) : undefined,
			productRating ? gt(products.rating, productRating) : undefined,
			minPrice ? gt(products.price, minPrice) : undefined,
			maxPrice ? lt(products.price, maxPrice) : undefined,
			...categoryQuery
		),
		with: {
			seller: true
		},
		orderBy: sortings[sorting].config,
		limit: 25
	});

	//I only have to do this manually because for some reason drizzle keeps me from doing this in the ORM
	//TODO: find a way to do this with Drizzle without loosing typesafety
	if (minSellerRating || maxSellerRating) {
		return productsArray.filter((product) => {
			if (minSellerRating) {
				if (Number(product.seller.rating) < Number(minSellerRating)) {
					return false;
				}
			}
			if (maxSellerRating) {
				if (Number(product.seller.rating) > Number(maxSellerRating)) {
					return false;
				}
			}
			return true;
		});
	}

	return productsArray;
};

export const load: PageServerLoad = ({ url }) => {
	const searchParams = extractSearchParams(url.searchParams);

	return {
		products: getProducts(searchParams),
		searchData: searchParams
	};
};
