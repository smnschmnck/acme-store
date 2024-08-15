import { relations } from 'drizzle-orm';
import { char, integer, pgTable, primaryKey } from 'drizzle-orm/pg-core';
import { guestSessions } from './guestSessions';
import { products } from './products';

export const productsToShoppingCarts = pgTable(
	'products_to_shopping_carts',
	{
		productId: char('product_id', { length: 36 }).notNull(),
		shoppingCartId: char('shopping_cart_id', { length: 36 }).notNull(),
		amount: integer('amount').notNull().default(1)
	},
	(t) => ({
		pk: primaryKey({ columns: [t.productId, t.shoppingCartId] })
	})
);

export const usersToGroupsRelations = relations(productsToShoppingCarts, ({ one }) => ({
	sessions: one(guestSessions, {
		fields: [productsToShoppingCarts.shoppingCartId],
		references: [guestSessions.shoppingCart]
	}),
	products: one(products, {
		fields: [productsToShoppingCarts.productId],
		references: [products.id]
	})
}));
