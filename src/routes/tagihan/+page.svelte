<script>
    import FormTagihan from "$lib/components/FormTagihan.svelte";
    import FormTotal from "$lib/components/FormTotal.svelte";
</script>
<div class="flex flex-col h-[calc(100vh-64px)] justify-between">
    <div class="p-4 space-y-4 overflow-y-auto">
        <FormTagihan title="Uang Gedung" info="0"/>
        <FormTagihan title="Daftar Ulang" info="0"/>
    </div>

    <div>
        <FormTotal total="0" keterangan= "Belum lunas"/>
    </div>
</div>

