<script>
  export let isOpen = false;
  export let onClose = () => {};
  export let data = null;

  $: console.log("🔍 [HalfPopUp] isOpen:", isOpen);
    $: console.log("🔍 [HalfPopUp] data:", data);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
{#if isOpen}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div class="overlay" on:click={onClose}>
    <div class="popup" on:click|stopPropagation>
      <button class="close-btn" on:click={onClose}>×</button>

      {#if data}
        <img
        src={data.IMAGE_URL}
        on:error={()=> data.IMAGE_URL ="/images/broken-image.png"}/>

        <h1>{data.TITLE}</h1>
        <p>{data.CONTENT}</p>
      {:else}
        <p>Memuat pengumuman...</p>
      {/if}
    </div>
  </div>
{/if}

