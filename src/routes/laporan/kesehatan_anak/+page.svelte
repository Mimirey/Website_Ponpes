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

<div class="bg-white p-4 rounded-xl shadow-md space-y-4 mt-6">

  
  <HorizontalCalendar initialDate={data.selectedDate} on:change={onTanggalChange} />
  <div class="flex justify-end">
    <DropdownTime on:change={onTimeChange} />
  </div>
</div>


{#if $filteredLaporan.length}
<div class="mb-15">
   <FormHealth laporan={$filteredLaporan} studentName={data.studentName} />
</div>
{:else}
  <p class="text-sm text-gray-500 mt-4">Tidak ada laporan tersedia.</p>
{/if}