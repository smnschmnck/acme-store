import { env } from '$env/dynamic/private';
import axios from 'axios';
import { drizzle } from 'drizzle-orm/mysql-proxy';

export const db = drizzle(async (sql, params, method) => {
	try {
		const rows = await axios.post(env.DATABASE_PROXY_HOST, { sql, params, method });

		return { rows: rows.data };
	} catch (e: any) {
		console.error('Error from mysql proxy server: ', e.response.data);
		return { rows: [] };
	}
});
