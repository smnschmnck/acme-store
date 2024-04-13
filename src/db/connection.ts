import { drizzle } from 'drizzle-orm/mysql-proxy';
import axios, { isAxiosError } from 'axios';
import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export const db = drizzle(async (sql, params, method) => {
	try {
		const credentials = {
			username: env.DATABASE_USERNAME,
			password: env.DATABASE_PASSWORD
		};
		const rows = await axios.post(env.DATABASE_PROXY, {
			sql,
			params,
			method,
			credentials
		});

		return { rows: rows.data };
	} catch (e: unknown) {
		if (isAxiosError(e)) {
			console.error('Error from mysql proxy server: ', e.response?.data);
		} else {
			console.error('Unknown error', error);
		}
		return { rows: [] };
	}
});
