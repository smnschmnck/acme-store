import { type InferSelectModel, relations } from 'drizzle-orm';
import { mysqlTable, primaryKey, char } from 'drizzle-orm/mysql-core';
import { productsToShoppingCarts } from './productsToShoppingCarts';

export const guestSessions = mysqlTable(
	'guest_sessions',
	{
		id: char('id', { length: 36 }).notNull().primaryKey(),
		shoppingCart: char('shopping_cart', { length: 36 }).notNull()
	},
	(table) => {
		return {
			guestSessionsId: primaryKey(table.id)
		};
	}
);
export type GuestSessions = InferSelectModel<typeof guestSessions>;

export const guestSessionsRelations = relations(guestSessions, ({ many }) => ({
	productsToShoppingCart: many(productsToShoppingCarts)
}));
