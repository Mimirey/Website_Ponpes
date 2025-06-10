<script>
    import FormProfil from "$lib/components/FormProfil.svelte";
    import Button from "$lib/components/Button.svelte";
</script>

<div class="profil">
<img src="https://i.pinimg.com/736x/aa/41/7e/aa417efe770edc17520ce93287830cb5.jpg" 
alt="profile" 
width="100px"
style="border-radius: 100px; ">
<h3>User 01</h3>

<FormProfil head="Email" info="ortu@gmail.com"/>
<FormProfil head="Alamat" info="lorem ipsum"/>
<FormProfil head="Nomor Telepon" info="080000000000"/>

<Button name="Log Out"/>
</div>
