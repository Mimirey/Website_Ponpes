<script>
	import { onDestroy, onMount } from 'svelte';

	let { image = '', title = '' } = $props();
	let currentIndex = 0;

	const intervalTime = 3000;
	let interval;

	function prev() {
		currentIndex = (currentIndex - 1 + image.length) % image.length;
	}

	function next() {
		currentIndex = (currentIndex + 1) % image.length;
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
		{#if image}
			<img src={image} alt="" />

			<div class="overlay-text">
				<h2>{title}</h2>
			</div>
		{:else}
			<p>No items to display</p>
		{/if}
	</div>

	<button onclick={next}>&gt;</button>
</div>
