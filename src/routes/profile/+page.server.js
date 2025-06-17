import { redirect } from "@sveltejs/kit";

export async function load({cookies,fetch}) {
    const token= cookies.get('token');

    if (!token){
        throw redirect(302,'/login')
    }

    const res= await fetch('https://admin.al-achsaniyyah.id/api/users', {
        headers:{
            'Talentaku-token': token
        }
    });

    const data= await res.json();
    if (data.STATUS !== 'SUCCESS'){
        throw redirect(302,'/login');
    }

    return {
        user: data.PAYLOAD
    };
}