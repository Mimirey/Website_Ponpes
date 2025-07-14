<script>
    import FormTagihan from "$lib/components/FormTagihan.svelte";
    import FormTotal from "$lib/components/FormTotal.svelte";

    export let data;
    const detail= data.detail ??[];
    const s_id= data.s_id;

</script>
<div class="flex flex-col h-[calc(100vh-64px)] justify-between">
  <div class="p-4 space-y-4 overflow-y-auto">
    {#each detail.invoice_data as item}
      <FormTagihan 
        title={item.category.name}
        info={item.formatted_amount} />
    {/each}
  </div>

  <div>
    <FormTotal 
      total={detail.formatted_total_amount}
      keterangan={detail.ispublished ? "Sudah lunas" : "Belum lunas"} />
  </div>
</div>


