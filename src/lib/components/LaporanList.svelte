<script>
    export let reports=[];

    import { goto } from "$app/navigation";
   
   function bukaDetail(id) {
    goto(`/laporanDetail/${id}`)
    
   }
</script>


<div class="report-list">
    {#each reports as report (report.id)}
     <div class="report-card" > 
        <div class="icon">📄</div>
        <div class="report-content">
            <strong >{report.judul}</strong>
            <p>{report.tanggal}</p>
            <button on:click={() => bukaDetail(report.id)}>Klik disini</button>
        </div>
    </div>
    {/each}
</div>