import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/mysql-proxy';

import type * as Schema from '../db/schema';

export const db = drizzle<typeof Schema>(async (sql, params, method) => {
	const body = { sql, params, method };
	const url = `${env.DATABASE_PROXY_HOST}/query`;
	console.log('-----BODY-----', body);
	console.log('-----URL-----', url);

	const res = await fetch(url, {
		method: 'post',
		body: JSON.stringify(body)
	});
	console.log('----POST----', await res.text());

	const out: any = null;
	return out;
});
