<script>
	import { goto } from "$app/navigation";
    import toast from 'svelte-french-toast';
   

    let username='';
    let password='';
    let error = '';
    

    const handleLogin=()=>{
        if (username === 'ortu' && password === 'ortu123') {
            goto('/dashboard');
            
        } else {
            error='Username dan password harus valid!'
            toast.error(error)
            
        }
    }
</script>


<form on:submit|preventDefault={handleLogin} >
<label for="usn">
    <input type="text" bind:value={username} placeholder="Username">
</label>

<label for="pass">
    <input type="password" bind:value={password} placeholder="Password">
</label>
 <button type="submit">Login</button>

</form>