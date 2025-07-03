<script>
  import ReportForm from '$lib/components/ReportForm.svelte';
  export let data;
</script>

{#if data.error}
  <p class="text-red-600">{data.error}</p>
{:else}
  <ReportForm laporan={data.detail} />
{/if}