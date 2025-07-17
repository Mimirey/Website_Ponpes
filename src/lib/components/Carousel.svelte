<script>
	import { onDestroy, onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

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

	const dispatch = createEventDispatcher();

  function handleClick(item) {
    dispatch('itemClick', item); 
  }

  $: console.log('index:', currentIndex, 'image:', items[currentIndex]?.IMAGE_URL);

</script>

<div class="carousel">
	<button on:click={prev}>&lt;</button>

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div 
	class="carousel-item" on:click={()=>handleClick(items[currentIndex])}
	role="button"
  	tabindex="0">

		{#if items.length > 0}
			<img src={items[currentIndex].IMAGE_URL} 
			alt="gambar"
			on:error={()=> items[currentIndex].IMAGE_URL= '/images/broken-image.png'} />

			<div class="overlay-text">
				<h2>{items[currentIndex].TITLE}</h2>
			</div>
		{:else}
			<p>No items to display</p>
		{/if}
	</div>

	<button on:click={next}>&gt;</button>
</div>
