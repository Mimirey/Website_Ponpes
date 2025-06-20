<script>
	import { goto } from "$app/navigation";
    // import toast from 'svelte-french-toast';

    export let form;
    export let enhance;
    let username='';
    let password='';
    let error = '';
     

    // const handleLogin=()=>{
    //     if (username === 'ortu' && password === 'ortu123') {
    //         goto('/dashboard');
            
    //     } else {
    //         error='Username dan password harus valid!'
    //         toast.error(error)
            
    //     }
    // }
</script>


<form method="POST" use:enhance >
<label for="usn">
     <input type="text" name="username" bind:value={username} placeholder="username" required  />
</label>

<label for="pass">
    <input type="password" name="password" bind:value={password} placeholder="password" required />
</label>
 <button type="submit">Login</button>

 {#if form?.error}
  <p class="text-red-500 mt-2">{form.error}</p>
{/if}

</form>