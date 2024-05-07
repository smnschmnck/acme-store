import { drizzle } from 'drizzle-orm/mysql-proxy';
import { env } from '$env/dynamic/private';

export const db = drizzle(async (sql, params, method) => {
	const proxyUrl = `${env.DATABASE_PROXY_HOST}/query`;

	console.log('PARAMS', params);

	const body = {
		sql,
		params,
		method,
		secretKey: env.DATABASE_PROXY_SECRET_KEY
	};
	const res = await fetch(proxyUrl, {
		method: 'post',
		body: JSON.stringify(body),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});

	if (!res.ok) {
		console.log('-------QUERY ERROR------', await res.text());

		return { rows: [] };
	}

	return await res.json();
});
