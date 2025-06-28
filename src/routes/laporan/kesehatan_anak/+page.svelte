<script lang="ts">
  import HorizontalCalendar from '$lib/components/HorizontalCalendar.svelte';
  import DropdownTime from '$lib/components/DropdownTime.svelte';
  import FormHealth from '$lib/components/FormHealth.svelte';
  import { writable, derived } from 'svelte/store';
  import dayjs from 'dayjs';

  export let data;

  const selectedDate = writable(dayjs(data.selectedDate));
  const selectedTime = writable('');
  const detailLaporan = writable(data.detail);

  // Format string tanggal
  const selectedDateStr = derived(selectedDate, (d) => d.format('YYYY-MM-DD'));

  const filteredLaporan = derived(
    [detailLaporan, selectedDateStr, selectedTime],
    ([$detail, $date, $time]) =>
      $detail.filter(item => item.SH_DATE === $date && item.SH_TIME === $time)
  );

  function onTanggalChange(e) {
    selectedDate.set(dayjs(e.detail));
  }

  function onTimeChange(e) {
    selectedTime.set(e.detail);
  }
</script>

<HorizontalCalendar initialDate={data.selectedDate} on:change={onTanggalChange} />
<DropdownTime on:change={onTimeChange} />

{#if $filteredLaporan.length}
  <FormHealth laporan={$filteredLaporan} />
{:else}
  <p class="text-sm text-gray-500 mt-4">Tidak ada laporan tersedia.</p>
{/if}