import { redirect } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	let token = event.cookies.get('token');
	if (event.url.pathname.startsWith('/')) {
		if (!token) {
			return new Response(null, {
				status: 302,
				headers: {
					Location: '/login'
				}
			});
		}
		let fetchAuthCheck = await fetch(import.meta.env.VITE_API_SERVER_URL + '/users', {
			method: 'GET',
			headers: {
				'Talentaku-token': token
			}
		});

		if (fetchAuthCheck.status !== 200) {
			event.cookies.getAll().forEach((cookie) => {
				event.cookies.delete(cookie.name, { path: '/' });
			});
			throw redirect(307, '/');
		}
	}
	const response = await resolve(event);

	return response;
}
