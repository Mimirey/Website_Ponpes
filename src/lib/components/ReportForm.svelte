<script>
  import ActivityList from "./ActivityList.svelte";
  
  export let laporan;

  function formatNote(note) {
    if (!note) return '';
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return note.replace(urlRegex, (url) => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`);
  }
  console.log('Laporan diterima:', laporan);
</script>

<div class="space-y-2 p-4 rounded-lg border shadow bg-white mt-10 ">
  <h2 class="text-xl font-semibold ">Link Dokumentasi</h2>
  <p class="text-gray-600 break-words whitespace-pre-wrap">{@html formatNote(laporan?.SR_CONTENT)}</p>
</div>

<div class="space-y-2 p-4 rounded-lg border shadow bg-white mt-10">
   {#if laporan.ACTIVITIES?.length > 0}
    <div class="mt-4">
      <h3 class="text-lg font-bold mb-2">Aktivitas</h3>
      <ActivityList activities={laporan.ACTIVITIES} />
    </div>
  {/if}
</div>