<script>
    import MonthPicker from '$lib/components/MonthPicker.svelte';
    import {data} from '$lib/data/index.js';
    import LaporanList from "$lib/components/LaporanList.svelte";

     let selectedMonth = new Date().toISOString().slice(0, 7);
    $: filteredData = data.filter(item => item.tanggal.startsWith(selectedMonth));
</script>


<MonthPicker on:change={(e) => selectedMonth = e.detail.month} />
<LaporanList reports={filteredData}/>