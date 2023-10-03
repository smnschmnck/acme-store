import { relations, type InferSelectModel } from 'drizzle-orm';
import { mysqlTable, primaryKey, char, varchar, decimal, int } from 'drizzle-orm/mysql-core';
import { sellers } from './sellers';
import { guestSessions } from './guestSessions';

export const products = mysqlTable(
	'products',
	{
		id: char('id', { length: 36 }).notNull(),
		name: varchar('name', { length: 255 }).notNull(),
		category: varchar('category', { length: 255 }).notNull(),
		price: decimal('price', { precision: 10, scale: 2 }).notNull(),
		rating: decimal('rating', { precision: 3, scale: 1 }).notNull().default('0'),
		ratingCount: int('rating_count').notNull().default(0),
		sellerId: char('seller_id', { length: 36 }).notNull(),
		imageUrl: varchar('image_url', { length: 255 }).notNull()
	},
	(table) => {
		return {
			productsId: primaryKey(table.id)
		};
	}
);
export type Products = InferSelectModel<typeof products>;

export const productsRelations = relations(products, ({ one }) => ({
	seller: one(sellers, { fields: [products.sellerId], references: [sellers.id] }),
	shoppingCart: one(guestSessions, {
		fields: [products.id],
		references: [guestSessions.shoppingCart]
	})
}));
