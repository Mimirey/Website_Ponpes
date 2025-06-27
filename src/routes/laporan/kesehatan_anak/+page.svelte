<script  lang="ts">
import FormHealth from '$lib/components/FormHealth.svelte';
 import { writable, derived } from 'svelte/store';
  import { format } from 'date-fns';
  import { CalendarIcon } from 'lucide-svelte';
  import { Popover, PopoverTrigger, PopoverContent } from '$lib/components/popover';
  import Calendar from '$lib/components/calendar/calendar.svelte';

  

  export let data;
  const selectedDate = writable<Date | undefined>();

  const filteredLaporan = derived([selectedDate], ([$selectedDate]) => {
    if (!$selectedDate) return data.detail;
    const formatted = format($selectedDate, 'yyyy-MM-dd');
    return data.detail.filter((item) => item.SH_DATE === formatted);
  });


  const laporan = data.detail;
</script>

<Popover>
  <PopoverTrigger class="flex items-center space-x-2 px-3 py-2 border rounded-md text-sm text-muted-foreground">
    <CalendarIcon class="h-4 w-4" />
    {#if $selectedDate}
      <span>{format($selectedDate, 'PPP')}</span>
    {:else} 
      <span>Pilih tanggal</span>
    {/if}
  </PopoverTrigger>
  <PopoverContent class="w-auto p-0"  portalProps={{}}>
    <Calendar mode="single" selected={$selectedDate} on:select={(e) => selectedDate.set(e.detail)} initialFocus />
  </PopoverContent>
</Popover>

<!-- Ini list laporan hasil filter -->
{#each $filteredLaporan as laporanItem}
  <FormHealth laporan={laporanItem} />
{/each}
<FormHealth laporan={laporan} />