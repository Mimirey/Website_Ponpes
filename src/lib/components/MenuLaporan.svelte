<script>
	import { goto } from "$app/navigation";
    export let head='';
    export let link='/';
</script>

<div  class="menu">
    <img src="https://i.pinimg.com/736x/1e/1b/76/1e1b76232c1f3745570ade751e73140d.jpg" alt="icon" width="50" height="50">

    <div class="menuItem">
        <h2>Laporan {head}</h2>
        <a href={link} on:click|preventDefault={()=> goto(link)}>Klik disini untuk akses Laporan {head}</a>
    </div>
</div>