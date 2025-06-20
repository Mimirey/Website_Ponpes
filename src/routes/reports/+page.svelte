<script>
	import MonthPicker from '$lib/components/MonthPicker.svelte';
	import { data } from '$lib/data/index.js';
	import LaporanList from '$lib/components/LaporanList.svelte';

	let selectedMonth = $state(new Date().toISOString().slice(0, 7));
	let filteredData = $state(data.filter((item) => item.tanggal.startsWith(selectedMonth)));
	$effect(() => {
		// Update the filtered data whenever selectedMonth changes
		filteredData = data.filter((item) => item.tanggal.startsWith(selectedMonth));
	});
</script>

<!-- <MonthPicker on:change={(e) => (selectedMonth = e.detail.month)} /> -->
<MonthPicker change={(month) => (selectedMonth = month)} />
<LaporanList reports={filteredData} />
