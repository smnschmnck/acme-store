import { db } from '../db/connection';
import type { PageServerLoad } from './$types';

const getProducts = async () => {
	return db.query.products.findMany({
		with: {
			seller: true
		}
	});
};

export const load: PageServerLoad = async () => {
	return {
		products: await getProducts()
	};
};
