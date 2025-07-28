import { redirect } from '@sveltejs/kit';


export async function load({ cookies, fetch }) {
	const token = cookies.get('token');

	if (!token) {
		throw redirect(302, '/login');
	}

	const res = await fetch(import.meta.env.VITE_API_SERVER_URL + '/users', {
		headers: {
			'Talentaku-token': token
		}
	});

	const data = await res.json();

	if (data.STATUS !== 'SUCCESS') {
		throw redirect(302, '/login');
	}

	cookies.set('S_ID', data.PAYLOAD.S_ID.toString(), {
		path: '/', 
		secure: import.meta.env.VITE_APPHTTPS === 'true' ? true : false,
		httpOnly: false,
		});

	return {
		user: data.PAYLOAD
	};
}


