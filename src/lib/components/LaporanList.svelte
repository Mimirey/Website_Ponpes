<script>
	

	import { goto } from '$app/navigation';

	export let onClick = () => {};
	export let reports = [];
</script>

{#each reports as item (item.SH_ID)}
<div class="report-list">
	
		 <div class="report-card">
    	<p><strong>Tanggal:</strong> {item.SH_DATE}</p>
    	<p><strong>Waktu:</strong> {item.SH_TIME}</p>
    	<button on:click={() => onClick(item.SH_DATE, item.SH_TIME)}>Lihat Detail</button>
  </div>
	
</div>
{/each}
