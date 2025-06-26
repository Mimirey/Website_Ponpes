export const prerender = false; 

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, cookies, fetch }) {
  const token = cookies.get('token');
  const userRaw = cookies.get('user');

  if (!token || !userRaw) {
    return { error: 'Belum login atau data user tidak ditemukan.' };
  }

  const user = JSON.parse(userRaw);

  const s_id = user.id;
//   const s_id = url.searchParams.get('S_ID') ?? user.id; 
  // const date = url.searchParams.get('date');
  // const time = url.searchParams.get('time');

  
  console.log('➡️ S_ID:', s_id);
  // console.log('➡️ Date:', date);
  // console.log('➡️ Time:', time);

  // if (!s_id || !date || !time) {
  //   return { error: 'Parameter tidak lengkap.' };
  // }

  const res = await fetch(`https://admin.al-achsaniyyah.id/api/student-health?S_ID=118`, {
    headers: {
      'Talentaku-token': token,
    }
  });

  const json = await res.json();
   const payload = json.PAYLOAD ?? [];

//    console.log('📦 Payload length:', payload.length);
//   console.log('📦 Payload data:', JSON.stringify(payload, null, 2));
const detail = json.PAYLOAD ?? [];
// const detail = payload.filter(
//   item => item.SH_TIME?.toUpperCase() === time && item.SH_DATE === date
// );
console.log('✅ Detail ditemukan:', detail);

  return {
    detail, 
  };
}
