<script>
    import Carousel from "$lib/components/Carousel.svelte";
    import MenuLaporan from "$lib/components/MenuLaporan.svelte";
	// import { data } from "$lib/data";
    export let data;

</script>

    <Carousel items={data.announcements}/>

    <div class="opsiLaporan">
<MenuLaporan head="Harian" link="/laporan/harian"/>
<MenuLaporan head="Kesehatan Anak" link="/laporan/kesehatan_anak"/>
<MenuLaporan head="Terapis" link="/laporan/terapis"/>
    </div>

