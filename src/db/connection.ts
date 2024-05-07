import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/mysql-proxy';

import * as schema from '../db/schema';

const proxyClient = async (sql: string, params: any[], method: 'all' | 'execute') => {
	const body = { sql, params, method };
	const url = `${env.DATABASE_PROXY_HOST}/query`;
	console.log('-----BODY-----', body);
	console.log('-----URL-----', url);

	const res = await fetch(url, {
		method: 'post',
		body: JSON.stringify(body),
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const rows = await res.json();
	console.log('----POST----', rows);

	return { rows };
};

export const db = drizzle(proxyClient, { schema });
