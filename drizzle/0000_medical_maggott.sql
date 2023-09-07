-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `products` (
	`id` char(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`category` varchar(255) NOT NULL,
	`price` decimal(10,2) NOT NULL,
	`rating` decimal(3,1),
	`rating_count` int,
	`seller_id` char(36) NOT NULL,
	`image_url` varchar(255) NOT NULL,
	CONSTRAINT `products_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sellers` (
	`id` char(36) NOT NULL,
	`name` varchar(255) NOT NULL,
	`rating` decimal(5,2),
	`rating_count` int,
	CONSTRAINT `sellers_id` PRIMARY KEY(`id`)
);

*/