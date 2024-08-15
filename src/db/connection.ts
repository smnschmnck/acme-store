import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/pg-proxy';

import * as schema from '../db/schema';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const proxyClient = async (sql: string, params: any[], method: 'all' | 'execute') => {
	const body = {
		sql,
		params,
		method,
		secretKey: env.DATABASE_PROXY_SECRET_KEY
	};
	const url = `${env.DATABASE_PROXY_HOST}/query`;

	const res = await fetch(url, {
		method: 'post',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (!res.ok) {
		console.error('Error from postgres proxy server: ', await res.text());
		return { rows: [] };
	}

	const rows = await res.json();
	return { rows };
};

export const db = drizzle(proxyClient, { schema });
