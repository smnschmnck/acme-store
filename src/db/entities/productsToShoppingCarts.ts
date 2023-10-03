import { relations } from 'drizzle-orm';
import { char, mysqlTable, primaryKey } from 'drizzle-orm/mysql-core';
import { guestSessions } from './guestSessions';
import { products } from './products';

export const productsToShoppingCarts = mysqlTable(
	'products_to_shopping_carts',
	{
		productId: char('product_id', { length: 36 }).notNull(),
		shoppingCartId: char('shopping_cart_id', { length: 36 }).notNull()
	},
	(t) => ({
		pk: primaryKey(t.productId, t.shoppingCartId)
	})
);

export const usersToGroupsRelations = relations(productsToShoppingCarts, ({ one }) => ({
	group: one(guestSessions, {
		fields: [productsToShoppingCarts.shoppingCartId],
		references: [guestSessions.shoppingCart]
	}),
	user: one(products, {
		fields: [productsToShoppingCarts.productId],
		references: [products.id]
	})
}));
