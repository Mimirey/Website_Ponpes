import { error } from "@sveltejs/kit";

export async function load ({cookies,fetch}){
    const token = cookies.get('token');
	const userCookie = cookies.get('user');

	if (!token || !userCookie) {
		return {
			error: 'Token atau user tidak ditemukan. Silakan login ulang.'
		};
	}

    const user = JSON.parse(userCookie);
	const parentId = user.id;

    const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/student-report?parentId=118`, {
			headers: {
				'Talentaku-token': token,
			
			}
	});

    if (!res.ok) {
			const text = await res.text();
			console.error('Gagal fetch:', text);
			return { error: 'Gagal ambil laporan.' };
		}

		const data = await res.json();
		const reports = data.PAYLOAD ?? [];

		return {
			reports
		};
}