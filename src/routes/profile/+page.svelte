<script>
    import FormProfil from "$lib/components/FormProfil.svelte";
    import Button from "$lib/components/Button.svelte";

    export let data;
    const user= data.user;
</script>

<div class="profil max-w-md mx-auto p-6 bg-white rounded-xl shadow-md text-center space-y-4">
  <img
    src={user.U_IMAGE_PROFILE}
    alt="profile"
    class="w-24 h-24 mx-auto rounded-full object-cover border border-gray-300"
    on:error={() => user.U_IMAGE_PROFILE = '/images/default-profile.jpeg'}
  />

  <h2 class="text-xl font-semibold text-gray-800">{user.U_NAME}</h2>

  <div class="space-y-2">
    <FormProfil head="Email" info={user.U_EMAIL} />
    <FormProfil head="Alamat" info={user.U_ADDRESS} />
    <FormProfil head="Nomor Telepon" info={user.U_PHONE} />
  </div>

  <div class="pt-4">
    <Button name="Log Out" />
  </div>
</div>
