export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, fetch, url }) {
  const token = cookies.get('token');

  if (!token) {
    return { error: 'Token tidak ditemukan. Silakan login ulang.' };
  }

  const resUser = await fetch(import.meta.env.VITE_API_SERVER_URL + '/users', {
    headers: {
      'Talentaku-token': token
    }
  });

  const userData = await resUser.json();

  if (userData.STATUS !== 'SUCCESS') {
    return { error: 'Gagal mengambil data user dari /users' };
  }

  const studentName= userData.PAYLOAD.STUDENT_NAME;
  const s_id = userData.PAYLOAD.S_ID;
  console.log('🔍 S_ID yang digunakan:', s_id);

   const res = await fetch(`https://admin.al-achsaniyyah.id/api/student-health?S_ID=${s_id}`, {
    headers: {
      'Talentaku-token': token,
    }
  });

  const json = await res.json();
  const detail = json.PAYLOAD ?? [];

  console.log('🔍 S_ID yang digunakan:', s_id);
  console.log('✅ Semua detail laporan:', detail.length);

  return {
    detail,
    s_id,
    studentName
  };
}