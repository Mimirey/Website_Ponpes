<script>
	import { createEventDispatcher } from 'svelte';
	// const dispatch= createEventDispatcher();

	let selectedMonth = $state(new Date().toISOString().slice(0, 7));
	let { change } = $props();
	function handleChange(event) {
		selectedMonth = event.target.value;
		if (change) {
			change(selectedMonth);
		}
	}
</script>

<div class="month-picker">
	<label for="month">Selected Month:</label>
	<input type="month" id="month" bind:value={selectedMonth} onchange={handleChange} />
</div>
