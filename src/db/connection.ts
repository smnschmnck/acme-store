import { env } from '$env/dynamic/private';
import { drizzle } from 'drizzle-orm/mysql-proxy';

import type * as Schema from '../db/schema';

export const db = drizzle<typeof Schema>(async (sql, params, method) => {
	const body = { sql, params, method };
	console.log('-----BODY-----', body);
	console.log('-----URL-----', env.DATABASE_PROXY_HOST);

	const res = await fetch(env.DATABASE_PROXY_HOST);
	console.log('----GET----', await res.text());

	const out: any = null;
	return out;
});
