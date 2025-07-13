<script>
	import HorizontalCalendar from '$lib/components/HorizontalCalendar.svelte';
	import {writable,derived} from 'svelte/store';
	import dayjs from 'dayjs';
	
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
{#if data.error}
	<p class="text-red-600">{data.error}</p>
{:else}
	<h1 class="text-2xl font-bold mb-4 ">Daftar Laporan</h1>
	
<div class="bg-white p-4 rounded-xl shadow-md space-y-4 mt-6">
  <HorizontalCalendar initialDate={data.selectedDate} on:change={onTanggalChange} />
</div>
{#if $filteredReports.length === 0}
	<p class="text-gray-500 mt-4">Tidak ada laporan pada tanggal ini.</p>
{:else}
	<div class="space-y-4 mt-4">
		{#each $filteredReports as report}
			<a
			href={`/laporan/${report.SR_ID}`}
			class="block p-4 bg-green-100 rounded-xl shadow hover:bg-green-200 transition"
			>
			<p class="font-semibold">{report.SR_TITLE}</p>
			<p class="text-sm text-gray-600">{report.FORMATTED_DATE}</p>
			</a>
			{/each}
		</div>
	{/if}
{/if}