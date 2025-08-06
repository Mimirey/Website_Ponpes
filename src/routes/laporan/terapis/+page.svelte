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
  ([$reports, $selectedDateStr]) => {
    console.log('Tanggal aktif:', $selectedDateStr);
    console.log('Semua tanggal laporan:', $reports.map(r => r.ST_DATE));
    
    return $reports.filter(item =>
      dayjs(item.ST_DATE).format('YYYY-MM-DD') === $selectedDateStr
    );
  }
);

function onTanggalChange(e) {
  const selected = dayjs(e.detail).format('YYYY-MM-DD'); // ✅ format jadi bersih
  selectedDate.set(dayjs(selected)); // 🧠 pastikan kembali ke dayjs object tapi hanya tanggal
}

function formatNote(note) {
    if (!note) return '';
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return note.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`);
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
    <div class="flex items-center gap-4 w-[90%] max-w-[640px] mx-auto p-4 rounded-[16px] bg-[#ffff] shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.2)]">
        <div class="flex-shrink-0  bg-[#2D9C7A] rounded-md flex items-center justify center p-3">
	        <svg 
	        xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#A4E6C4"
	        class="w-[40px] h-[40px] ">
	        <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
	      </div>
      <div>
        <p class="font-semibold">{report.STUDENT_NAME}</p>
        <p class="text-sm text-gray-600">{report.ST_DATE}</p>
			  <p class="text-m">{ @html formatNote (report?.ST_DESCRIPTION)}</p>
      </div>
    </div>
		
			{/each}
		</div>
	{/if}
{/if}