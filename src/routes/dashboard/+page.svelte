<script>
    import Carousel from "$lib/components/Carousel.svelte";
    import MenuLaporan from "$lib/components/MenuLaporan.svelte";
	import { data } from "$lib/data";

</script>

{#each data.announcements as item}
    <Carousel image={item.IMAGE_URL} title={item.TITLE}/>
{/each}

    <div class="opsiLaporan">
<MenuLaporan head="Harian" link="/laporan/harian"/>
<MenuLaporan head="Kesehatan Anak" link="/laporan/kesehatan_anak"/>
<MenuLaporan head="Terapis" link="/laporan/terapis"/>
    </div>

