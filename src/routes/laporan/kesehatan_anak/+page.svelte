<script lang="ts">
  import FormHealth from '$lib/components/FormHealth.svelte';
  import DropdownTime from '$lib/components/DropdownTime.svelte';
  import { writable, derived } from 'svelte/store';

  export let data;

  const selectedTime = writable('');

  const filteredLaporan = derived(selectedTime, ($selectedTime) => {
    if (!$selectedTime) return null;

    // cari hanya 1 data berdasarkan SH_TIME
    return data.detail.filter((item) => item.SH_TIME === $selectedTime);
  });

  console.log('🔍 Semua waktu tersedia:', data.detail.map((d) => d.SH_TIME));

</script>

<DropdownTime on:change={(e) => selectedTime.set(e.detail)} />

{#if $filteredLaporan}

    <FormHealth laporan={$filteredLaporan} />

{:else}
  <p class="text-sm text-gray-500 mt-4">Tidak ada laporan tersedia.</p>
{/if}