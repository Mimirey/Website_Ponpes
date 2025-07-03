<script>
  export let activities = [];
  let expanded = false;

  function toggle() {
    expanded = !expanded;
  }
</script>

<div class="border rounded-xl shadow bg-white overflow-hidden ">
  <div
    class="flex items-center justify-between p-4 bg-green-100 cursor-pointer"
    on:click={toggle}
  >
    <h3 class="text-lg font-semibold">📅 Kegiatan Inti</h3>
    <span class="text-xl">{expanded ? '▲' : '▼'}</span>
  </div>

  {#if expanded}
    <div class="p-4 space-y-3 bg-white">
      {#each activities as activity}
        {#each activity.REF_ACTIVITIES as ref}
          <div class="bg-green-200 px-4 py-2 rounded-lg text-sm font-medium shadow">
            📌 {ref.ACTIVITY_NAME}
          </div>
        {/each}
      {/each}
    </div>
  {/if}
</div>