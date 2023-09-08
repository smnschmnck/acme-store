import { db } from '../db/connection';
import type { PageServerLoad } from './$types';

const getProducts = async () => {
	return db.query.products.findMany({
		with: {
			seller: true
		},
		limit: 10
	});
};

export const load: PageServerLoad = async () => {
	return {
		products: await getProducts()
	};
};
