<script>
    import Carousel from "$lib/components/Carousel.svelte";
    import MenuLaporan from "$lib/components/MenuLaporan.svelte";

const images=[
    'https://i.pinimg.com/736x/5b/2e/45/5b2e452fa7af6a3fc5ffef2bc0d2bf98.jpg',
    'https://i.pinimg.com/736x/64/aa/9a/64aa9ac36f69f42b134e79fad3d0310b.jpg',
    'https://i.pinimg.com/736x/08/43/5b/08435bd8ba0947aa8bd20b08f6da6e9c.jpg'
];

const text=[
    'Kegiatan 1',
    'Kegiatan 2',
    'Kegiatan 3'
]

</script>

    <Carousel items={images} kegiatan={text}/>


    <div class="opsiLaporan">
<MenuLaporan head="Harian" link="/laporan/harian"/>
<MenuLaporan head="Kesehatan Anak" link="/laporan/kesehatan_anak"/>
<MenuLaporan head="Terapis" link="/laporan/terapis"/>
    </div>

