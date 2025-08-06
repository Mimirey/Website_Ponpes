import { error } from "@sveltejs/kit";

export async function load({ params, fetch, cookies }) {
	const token = cookies.get('token');
	const userCookie = cookies.get('user');

	if (!token || !userCookie) {
		throw error(401, 'Token atau user tidak ditemukan');
	}

	const user = JSON.parse(userCookie);
	const parentId = user.id;
	const srId = params.SR_ID;

	const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/student-report?parentId=${parentId}`, {
		headers: {
			'Talentaku-token': token
		}
	});

	if (!res.ok) {
		const text = await res.text();
		console.error('Gagal fetch:', text);
		throw error(res.status, 'Gagal ambil data laporan');
	}

	const data = await res.json();
	const reports = data.PAYLOAD ?? [];

	// Temukan laporan berdasarkan SR_ID
	const detail = reports.find(report => report.SR_ID == srId);

	if (!detail) {
		throw error(404, 'Laporan tidak ditemukan');
	}

	return { detail };
}