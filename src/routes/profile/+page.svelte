<script>
    import FormProfil from "$lib/components/FormProfil.svelte";
    import Button from "$lib/components/Button.svelte";

    export let data;
    const user= data.user;
</script>

<div class="profil">
<img 
src={user.U_IMAGE_PROFILE && user.U_IMAGE_PROFILE.trim() !== '' ? user.U_IMAGE_PROFILE : '/images/default-profile.jpeg'} 
alt="profile" 
width="100px"
style="border-radius: 100px;"/>
<h3>{user.U_NAME}</h3>

<FormProfil head="Email" info={user.U_EMAIL}/>
<FormProfil head="Alamat" info={user.U_ADDRESS}/>
<FormProfil head="Nomor Telepon" info={user.U_PHONE}/>

<Button name="Log Out"/>
</div>
