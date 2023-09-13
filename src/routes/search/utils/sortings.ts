import { asc, desc } from 'drizzle-orm';
import { products } from '../../../db/schema';

export const sortings = {
	highestPrice: {
		name: 'Highest Price',
		config: [desc(products.price)]
	},
	lowestPrice: {
		name: 'Lowest Price',
		config: [asc(products.price)]
	},
	alphabeticalAZ: {
		name: 'Alphabetical A-Z',
		config: [asc(products.name)]
	},
	alphabeticalZA: {
		name: 'Alphabetical Z-A',
		config: [desc(products.name)]
	},
	popular: {
		name: 'Popular',
		config: []
	}
};

export const sortingsWithoutConfig = Object.fromEntries(
	(Object.keys(sortings) as sortingsUnion[]).map((key) => [key, { name: sortings[key].name }])
);

export type sortingsUnion = keyof typeof sortings;

export const sortingsKeys = Object.keys(sortingsWithoutConfig) as sortingsUnion[];

export const normalizeSorting = (sorting: string | null): sortingsUnion => {
	if (!sorting) return 'popular';
	if (sorting in sortings) {
		return sorting as sortingsUnion;
	}

	return 'popular';
};
