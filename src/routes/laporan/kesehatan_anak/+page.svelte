<script lang="ts">
  import HorizontalCalendar from '$lib/components/HorizontalCalendar.svelte';
  import DropdownTime from '$lib/components/DropdownTime.svelte';
  import FormHealth from '$lib/components/FormHealth.svelte';
  import { writable, derived } from 'svelte/store';
  import dayjs from 'dayjs';
	import { AlertCircle } from 'lucide-svelte';

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

<div class="bg-[#3CB371] text-white px-6 py-6 flex items-center gap-2 shadow-md ">
  <h1 class="text-lg font-semibold">Daftar Laporan Kesehatan Anak</h1>
</div>

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
  <div class="flex flex-col h-[calc(70vh-64px)]">
  <div class="p-4 space-y-4 overflow-y-auto flex-1">
    <div class="flex items-center justify-center min-h-full">
      <div class="flex flex-col items-center justify-center text-gray-600 space-y-2">
        <AlertCircle class="w-10 h-10 text-yellow-500" />
        <span>Tidak ada laporan yang perlu ditunjukkan</span>
      </div>
    </div>
  </div>
</div>
{/if}