export const prerender = false;

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, fetch, url }) {
  const token = cookies.get('token');

  if (!token) {
    return { error: 'Token tidak ditemukan. Silakan login ulang.' };
  }

  // Ambil user profile
  const resUser = await fetch(import.meta.env.VITE_API_SERVER_URL + '/users', {
    headers: {
      'Talentaku-token': token
    }
  });

  const userData = await resUser.json();

  if (userData.STATUS !== 'SUCCESS') {
    return { error: 'Gagal mengambil data user dari /users' };
  }

  const s_id = userData.PAYLOAD.S_ID;
  const selectedDate = new Date().toISOString().split('T')[0];
  
  console.log('🔍 S_ID:', s_id);
  console.log('📅 Tanggal dipilih:', selectedDate);

  const res = await fetch(`https://admin.al-achsaniyyah.id/api/student-health?S_ID=${s_id}`, {
    headers: {
      'Talentaku-token': token,
    }
  });

  const json = await res.json();
  const detail = json.PAYLOAD ?? [];

  return {
    detail,
    s_id,
    selectedDate
  };
}