export async function load({cookies,fetch,url}){
    const token= cookies.get('token');

    if(!token){
        return {error: 'Token tidak ditemukan, silahkan login kembali.'}
    }

    const resUser= await fetch(import.meta.env.VITE_API_SERVER_URL + '/users',{
        headers:{
            'Talentaku-token':token
        }
    });

    const userData= await resUser.json();

    if (userData.STATUS !== 'SUCCES'){
        return {error: 'Gagal mengambil data'}
    }

    const s_id=userData.PAYLOAD.S_ID;
    console.log('🔍 S_ID yang digunakan:', s_id);

    const res=await fetch(`https://admin.al-achsaniyyah.id/api/student-therapy?S_ID=${s_id}`,{
        headers:{
            'Talentaku-token': token,
        }
    });

    const json=await res.json();
    const detail=json.PAYLOAD??[];

    console.log('🔍 S_ID yang digunakan:', s_id);
    console.log('✅ Semua detail laporan:', detail.length);

    return{
        detail,
        s_id,
        selectedDate: new Date().toISOString().split('T')[0],
    }
}