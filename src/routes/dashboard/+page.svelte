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

<div class="h-screen flex flex-col bg-white">

  <!-- Header (sticky biar selalu di atas) -->
  <div class="bg-[#3CB371] text-white px-6 py-6 flex items-center gap-2 shadow-md sticky top-0 z-10">
    <h1 class="text-lg font-semibold">Selamat datang</h1>
  </div>

  <!-- Konten scrollable -->
  <div class="flex-1 overflow-y-auto px-4 py-6 pb-24 space-y-6">
    
    <!-- Carousel -->
    <Carousel items={data.announcements} on:itemClick={openPopup} />

    <!-- Popup detail -->
    <HalfPopUp isOpen={showPopup} data={popupData} onClose={closePopup} />

    <!-- Menu laporan -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <MenuLaporan head="Harian" link="/laporan/harian" />
      <MenuLaporan head="Kesehatan Anak" link="/laporan/kesehatan_anak" />
      
      {#if user.U_IS_TERAPI}
        <MenuLaporan head="Terapis" link="/laporan/terapis" />
      {/if}
    </div>
  </div>
</div>
    

