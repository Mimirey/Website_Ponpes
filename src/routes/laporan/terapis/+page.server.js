export async function load({cookies,fetch,url}){
    const token= cookies.get('token');
    const userCookie = cookies.get('user');

	if (!token || !userCookie) {
		return {
			error: 'Token atau user tidak ditemukan. Silakan login ulang.'
		};
	}

	const profileRes = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/users`, {
		headers: {
			'Talentaku-token': token
		}
	});

	const userData = await profileRes.json();

 	if (userData.STATUS !== 'SUCCESS') {
    return { error: 'Gagal mengambil data user dari /users' };
  	}

    const user = userData.PAYLOAD.STUDENT_NAME;
	const s_id = userData.PAYLOAD.S_ID;
  	console.log('🔍 S_ID yang digunakan:', s_id);

    const res = await fetch(`${import.meta.env.VITE_API_SERVER_URL}/student-therapy?S_ID=${s_id}`, {
			headers: {
				'Talentaku-token': token,
			
			}
	});

	const data = await res.json();
	const reports = data.PAYLOAD ?? [];
	console.log('🔍 S_ID yang digunakan:', s_id);
  	console.log('✅ Semua detail laporan:',reports.length);
	return {
		reports
	};
}