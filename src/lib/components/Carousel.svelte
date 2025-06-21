<script>
	import { onDestroy, onMount } from 'svelte';

	// let { image = '', title = '' } = $props();
    export let items= [];
	let currentIndex = 0;

	const intervalTime = 3000;
	let interval;

	function prev() {
		currentIndex = (currentIndex - 1 + items.length) % items.length;
	}

	function next() {
		currentIndex = (currentIndex + 1) % items.length;
	}

	onMount(() => {
		interval = setInterval(() => {
			next();
		}, intervalTime);
	});
	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="carousel">
	<button onclick={prev}>&lt;</button>

	<div class="carousel-item">
		{#if items.length > 0}
			<img src={items[currentIndex].IMAGE_URL} alt="gambar" />

			<div class="overlay-text">
				<h2>{items[currentIndex].TITLE}</h2>
			</div>
		{:else}
			<p>No items to display</p>
		{/if}
	</div>

	<button onclick={next}>&gt;</button>
</div>
