/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies, fetch }) {
  const token = cookies.get('token');
  const userRaw = cookies.get('user');

  if (!token || !userRaw) {
    throw new Error('Belum login.');
  }

  const user = JSON.parse(userRaw);
  const s_id = user.id;

  const defaultMonth = new Date().toISOString().slice(0, 7); 

  const res = await fetch(
    `https://admin.al-achsaniyyah.id/api/student-health?S_ID=118`,
    // `https://admin.al-achsaniyyah.id/api/student-health?s_id=${s_id}`,
    {
      headers: {
        'Talentaku-token': token
      }
    }
  );

  const json = await res.json();

  const payload = json.PAYLOAD;
//   const filtered = Array.isArray(payload)
//     ? payload.filter(item => item.SH_DATE.startsWith(defaultMonth))
//     : [];

    console.log('S_ID yang dikirim:', s_id);

  return {
    reports: payload ?? [],
  defaultMonth
  };

  
}