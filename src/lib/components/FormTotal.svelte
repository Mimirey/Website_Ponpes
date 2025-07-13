<script>
    import { goto } from "$app/navigation";

    let {total, keterangan}= $props();
</script>

<div class="bg-gray p-6 shadow-md border text-gray-800 space-y-2">
    <div class="flex justify-between items-center">
        <h1 class="text-xl font-bold text-black-500 ">Total Tagihan:</h1>
        <h1 class="text-2xl font-bold text-red-700">{total}</h1>
    </div>
  <p class="text-sm text-gray-600">{keterangan}</p>
</div>