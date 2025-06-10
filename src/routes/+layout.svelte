<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import '../app.css'
     import { Toaster } from 'svelte-french-toast';
     import { page } from '$app/stores';
</script>

<Toaster/>
{#if $page.url.pathname !== '/login'}
  <Navbar />
{/if}
<slot />