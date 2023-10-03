import { relations, type InferSelectModel } from 'drizzle-orm';
import { mysqlTable, primaryKey, char, varchar } from 'drizzle-orm/mysql-core';
import { products } from './products';

export const guestSessions = mysqlTable(
	'guest_sessions',
	{
		id: char('id', { length: 36 }).notNull().primaryKey(),
		shoppingCart: varchar('shoppingCart', { length: 36 }).notNull()
	},
	(table) => {
		return {
			guestSessionsId: primaryKey(table.id)
		};
	}
);
export type GuestSessions = InferSelectModel<typeof guestSessions>;

export const shoppingCartProducts = relations(guestSessions, ({ many }) => ({
	products: many(products)
}));
