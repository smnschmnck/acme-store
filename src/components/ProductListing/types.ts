import type { Products, Sellers } from '../../db/schema';

export type ProductListingProps = Products & {
	seller: Sellers;
};
