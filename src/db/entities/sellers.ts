import { relations, type InferSelectModel } from 'drizzle-orm';
import { pgTable, primaryKey, char, varchar, decimal, integer } from 'drizzle-orm/pg-core';
import { products } from './products';

export const sellers = pgTable(
	'sellers',
	{
		id: char('id', { length: 36 }).notNull(),
		name: varchar('name', { length: 255 }).notNull(),
		rating: decimal('rating', { precision: 5, scale: 2 }).notNull().default('0'),
		ratingCount: integer('rating_count').notNull().default(0)
	},
	(table) => {
		return {
			sellersId: primaryKey(table.id)
		};
	}
);
export type Sellers = InferSelectModel<typeof sellers>;

export const sellersRelations = relations(sellers, ({ many }) => ({
	products: many(products)
}));
