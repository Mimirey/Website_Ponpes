<script>
    import {goto} from '$app/navigation';
</script>

<nav>
        <a href="/dashboard" on:click|preventDefault={()=> goto('/dashboard')}>Home</a>
        <a href="/reports" on:click|preventDefault={()=> goto('/reports')}>Reports</a>
        <a href="/profile" on:click|preventDefault={()=> goto('/profile')}>Profile</a>
</nav>