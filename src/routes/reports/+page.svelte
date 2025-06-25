<script>
  import MonthPicker from '$lib/components/MonthPicker.svelte';
  import LaporanList from '$lib/components/LaporanList.svelte';
  import { goto } from '$app/navigation';
  export let data;

  let allReports = data.reports;
  let selectedMonth = data.defaultMonth;


// 	const res = await fetch(`https://admin.al-achsaniyyah.id/api/student-health?S_ID=118&date=2025-05-09`);
//     // const res = await fetch(`https://admin.al-achsaniyyah.id/api/student-health?s_id=auto&month=${month}`);
//     const json = await res.json();
//     reports = json.PAYLOAD ?? [];
//   }

	 let reports = [];

  function filterReportsByMonth(month) {
    selectedMonth = month;

    let uniqueReports = [];
    let seenKeys = new Set();

    for (const item of allReports) {
      const key = `${item.SH_DATE}-${item.SH_TIME}`;
      if (!seenKeys.has(key) && item.SH_DATE.startsWith(month)) {
        seenKeys.add(key);
        uniqueReports.push(item);
      }
    }

    reports = uniqueReports;
  }

  // first time load
  filterReportsByMonth(selectedMonth);

  function handleMonthChange(month) {
    filterReportsByMonth(month);
  }

  function viewDetail(date, time) {
    goto(`/laporanDetail?date=${date}&time=${time}`);
  }
</script>

<MonthPicker change={handleMonthChange} />

<LaporanList {reports} onClick={viewDetail} />

