<script>
	import { preventDefault } from 'svelte/legacy';
	import { goto } from '$app/navigation';
	let { head = '', link = '/' } = $props();

	function preventDefaultHandler(fn) {
		return (event) => {
			event.preventDefault();
			fn.call(this, [event]);
		};
	}
</script>

<div class="menu">
	<img
		src="https://i.pinimg.com/736x/1e/1b/76/1e1b76232c1f3745570ade751e73140d.jpg"
		alt="icon"
		width="50"
		height="50"
	/>

	<div class="menuItem">
		<h2>Laporan {head}</h2>
		<a href={link} onclick={preventDefaultHandler(() => goto(link))}
			>Klik disini untuk akses Laporan {head}</a
		>
	</div>
</div>
