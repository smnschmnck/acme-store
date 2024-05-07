import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/mysql-proxy';

export const db = drizzle(async (sql, params, method) => {
	const body = { sql, params, method };
	const res = await fetch(env.DATABASE_PROXY_HOST, {
		body: JSON.stringify(body)
	});
	const rows = await res.json();

	return { rows };
});
