import { db } from '../../../db/connection';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		product: await db.query.products.findFirst({
			where: (products, { eq }) => eq(products.id, params.slug),
			with: {
				seller: true
			}
		})
	};
};
