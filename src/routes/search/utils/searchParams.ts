import { normalizeSorting } from './sortings';

export const extractSearchParams = (searchParams: URLSearchParams) => {
	const category = searchParams.get('category') ?? '';
	const searchQuery = searchParams.get('searchQuery') ?? '';
	const sorting = normalizeSorting(searchParams.get('sorting'));
	const productRating = searchParams.get('productRating');
	const minPrice = searchParams.get('minPrice');
	const maxPrice = searchParams.get('maxPrice');
	const minSellerRating = searchParams.get('minSellerRating');
	const maxSellerRating = searchParams.get('maxSellerRating');

	const searchParamsArray = Array.from(searchParams.keys());

	const rawFilterCategories = searchParamsArray.filter((key) => {
		if (!key.startsWith('category_')) {
			return false;
		}
		if (searchParams.get(key) !== 'on') {
			return false;
		}

		return true;
	});

	const filterCategories = rawFilterCategories.map((category) => category.replace('category_', ''));

	return {
		category,
		searchQuery,
		sorting,
		productRating,
		minPrice,
		maxPrice,
		minSellerRating,
		maxSellerRating,
		filterCategories,
		rawFilterCategories
	};
};

export type SearchDataParams = ReturnType<typeof extractSearchParams>;
