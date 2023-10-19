import type { Cookies } from '@sveltejs/kit';
import { guestSessions } from '../../db/schema';
import { db } from '../../db/connection';

const getSessionId = async (cookies: Cookies) => {
	const sessionId = cookies.get('SESSION');
	if (sessionId) {
		return sessionId;
	}
	const newSessionId = crypto.randomUUID();
	await db.insert(guestSessions).values({
		id: newSessionId,
		shoppingCart: crypto.randomUUID()
	});
	cookies.set('SESSION', newSessionId, {
		path: '/'
	});

	return newSessionId;
};

export const getSession = async (cookies: Cookies) => {
	const sessionId = await getSessionId(cookies);
	return await db.query.guestSessions.findFirst({
		where: (sessions, { eq }) => eq(sessions.id, sessionId)
	});
};
