import type { Cookies } from '@sveltejs/kit';
import { guestSessions } from '../../db/schema';
import { db } from '../../db/connection';

const SESSION_COOKIE_NAME = 'GUEST_SESSION';

const setNewSession = async (cookies: Cookies) => {
	const newSessionId = crypto.randomUUID();
	await db.insert(guestSessions).values({
		id: newSessionId,
		shoppingCart: crypto.randomUUID()
	});
	cookies.set(SESSION_COOKIE_NAME, newSessionId, {
		path: '/',
		maxAge: 2147483647
	});

	return newSessionId;
};

const getSessionId = async (cookies: Cookies) => {
	const sessionId = cookies.get(SESSION_COOKIE_NAME);
	if (sessionId) {
		return sessionId;
	}

	return setNewSession(cookies);
};

export const getSession = async (cookies: Cookies) => {
	const sessionId = await getSessionId(cookies);
	const session = await db.query.guestSessions.findFirst({
		where: (sessions, { eq }) => eq(sessions.id, sessionId)
	});

	if (session) {
		return session;
	} else {
		const newSessionId = await setNewSession(cookies);
		return await db.query.guestSessions.findFirst({
			where: (sessions, { eq }) => eq(sessions.id, newSessionId)
		});
	}
};
