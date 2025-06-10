<script>
    import { laporAnak } from "$lib/data";
    import { page } from "$app/stores";
    import { get } from "svelte/store";
   
    const id= parseInt(get(page).params.id);
    const laporan= laporAnak.find(item=>item.id === id);
</script>  

<div class="detailLaporan">
    <div class="detailItem">
    {#if laporan}
        <h2>{laporan.judul}</h2>
        <p><strong>Tanggal :</strong>{laporan.tanggal}</p>
        <p><strong>Suhu:</strong> {laporan.suhu} °C</p>
        <p><strong>SPO2:</strong> {laporan.spo2} %</p>
        <p><strong>Detak Jantung:</strong> {laporan.detak} bpm</p>
        <p><strong>Catatan:</strong> {laporan.catatan}</p>
    {:else}
    <p>Laporan tidak ditemukan.</p>
    {/if}
    </div>

</div>
