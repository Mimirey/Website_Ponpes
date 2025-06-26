<script>
import FormHealth from '$lib/components/FormHealth.svelte';
  // import { Calendar } from '@/components/ui/calendar';
  // import { writable } from 'svelte/store';
  // let date = writable(new Date());

export let data;

  const laporan = data.detail;
</script>

<FormHealth laporan={laporan}/>
<!-- <Calendar bind:selected={date} /> -->