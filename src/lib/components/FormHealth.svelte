<script>
  export let laporan =[];

  function formatNote(note) {
    if (!note) return '';
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return note.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`);
  }
  console.log('Laporan diterima:', laporan);
</script>

<div class="detailLaporan">
  {#if laporan.length > 0}
    {#each laporan as item (item.SH_ID)}
      <div class="laporan-block">
        <h2>Laporan Kesehatan</h2>
        <p><strong>Tanggal:</strong> {item.SH_DATE}</p>
        <p><strong>Suhu:</strong> {item.BODY_TEMPERATURE} °C</p>
        <p><strong>SPO2:</strong> {item.SPO2} %</p>
        <p><strong>Detak Jantung:</strong> {item.HEART_RATE} bpm</p>
        <p class="note">Catatan: {@html formatNote(item.SH_DESCRIPTION)}</p>
      </div>
      <hr />
    {/each}
  {:else}
    <p>Laporan tidak ditemukan.</p>
  {/if}
</div>