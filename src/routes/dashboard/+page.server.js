export async function load({ cookies, fetch }) {
	try {
		const token = cookies.get('token');

		const res = await fetch(import.meta.env.VITE_API_SERVER_URL + '/announcement', {
			headers: {
				'Talentaku-token': token
			}
		});

		const data = await res.json();

		if (data.status !== 'SUCCESS') {
			return { announcements: [] };
		}

		return {
			announcements: data.data
		};
	} catch (error) {
		console.error('Error saat fetch API:', error);
		return {
			announcements: [],
			error: 'Gagal mengambil data'
		};
	}
}
