<script>
    import Carousel from "$lib/components/Carousel.svelte";
    import MenuLaporan from "$lib/components/MenuLaporan.svelte";
	import HalfPopUp from "$lib/components/HalfPopUp.svelte";
    export let data;

    const user= data.user;
    let showPopup=false;
    let popupData= null;

   function openPopup(item) {
	popupData = item.detail;
	showPopup = true;
    }

    function closePopup() {
        showPopup = false;
    }
</script>

  <div class="bg-[#3CB371] text-white px-6 py-6 flex items-center gap-2 shadow-md ">
    <h1 class="text-lg font-semibold">Selamat datang</h1>
  </div>

    <Carousel items={data.announcements} on:itemClick={openPopup}/>
    <HalfPopUp isOpen={showPopup} data={popupData} onClose={closePopup} />

  <div class="opsiLaporan">
  <MenuLaporan head="Harian" link="/laporan/harian" />
  <MenuLaporan head="Kesehatan Anak" link="/laporan/kesehatan_anak" />
  
  {#if user.U_IS_TERAPI}
    <MenuLaporan head="Terapis" link="/laporan/terapis" />
  {/if}
</div>

    

