import type { Cookies } from '@sveltejs/kit';
import { guestSessions } from '../../db/schema';
import { db } from '../../db/connection';

const getSessionId = async (cookies: Cookies) => {
	const sessionCookieName = 'GUEST_SESSION';
	const sessionId = cookies.get(sessionCookieName);
	if (sessionId) {
		return sessionId;
	}
	const newSessionId = crypto.randomUUID();
	await db.insert(guestSessions).values({
		id: newSessionId,
		shoppingCart: crypto.randomUUID()
	});
	cookies.set(sessionCookieName, newSessionId, {
		path: '/',
		maxAge: 2147483647
	});

	return newSessionId;
};

export const getSession = async (cookies: Cookies) => {
	const sessionId = await getSessionId(cookies);
	return await db.query.guestSessions.findFirst({
		where: (sessions, { eq }) => eq(sessions.id, sessionId)
	});
};
