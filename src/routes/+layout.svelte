<script>
    import Navbar from "$lib/components/Navbar.svelte";
    import '../app.css'
     import { Toaster, toast } from 'svelte-sonner';
     import { page } from '$app/stores';
</script>

<Toaster position="top-center" toastOptions={{ className: 'my-toast' }} />

<slot />
{#if $page.url.pathname !== '/login'}
  <Navbar />
{/if}
