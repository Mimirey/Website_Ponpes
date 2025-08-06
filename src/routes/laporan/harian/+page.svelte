<script>
	import HorizontalCalendar from '$lib/components/HorizontalCalendar.svelte';
	import {writable,derived} from 'svelte/store';
	import dayjs from 'dayjs';
	import { AlertCircle } from 'lucide-svelte';

	export let data;

	const selectedDate = writable(dayjs(data.selectedDate));

	const selectedDateStr= derived(selectedDate,(d)=> d.format('YYYY-MM-DD'))

	const reports = writable(data.reports);

	const filteredReports = derived(
 	[reports, selectedDateStr],
  	([$reports, $selectedDateStr]) =>
   		 $reports.filter(item =>
     	 dayjs(item.SR_DATE).format('YYYY-MM-DD') === $selectedDateStr
    ),
);

function onTanggalChange(e) {
    selectedDate.set(dayjs(e.detail));
}
</script>

<div class="bg-[#3CB371] text-white px-6 py-6 flex items-center gap-2 shadow-md ">
  <h1 class="text-lg font-semibold">Daftar Laporan</h1>
</div>
{#if data.error}
	<p class="text-red-600">{data.error}</p>
{:else}
	
	
<div class="bg-white p-4 rounded-xl shadow-md space-y-4 mt-6">
  <HorizontalCalendar initialDate={data.selectedDate} on:change={onTanggalChange} />
</div>
{#if $filteredReports.length === 0}
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
{:else}
	<div class="space-y-4 mt-4">
		{#each $filteredReports as report}
			<a
			href={`/laporan/sr/${report.SR_ID}`}
			class="block p-4 bg-green-100 rounded-xl shadow hover:bg-green-200 transition"
			>
			<p class="font-semibold">{report.SR_TITLE}</p>
			<p class="text-sm text-gray-600">{report.FORMATTED_DATE}</p>
			</a>
			{/each}
		</div>
	{/if}
{/if}