<script>
	import Calendar from 'svelte-calendar';
	// import { createEventDispatcher } from 'svelte';

	let selectedDate = $state(new Date());
	let { change } = $props();
	$effect(() => {
		if (change) {
			change(selectedDate);
		}
	});
</script>

<Calendar
	bind:value={selectedDate}
	showOtherDays={false}
	showToday={false}
	weekStart={0}
	firstDayOfWeek={0}
	weekdayFormat="short"
	locale="id-ID"
/>

<style>
	:global(.svelte-calendar) {
		--calendar-accent: #4caf50;
		font-family: sans-serif;
	}

	:global(.svelte-calendar .day.selected) {
		background-color: var(--calendar-accent);
		color: white;
		border-radius: 50%;
	}

	:global(.svelte-calendar .header) {
		display: flex;
		justify-content: space-between;
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	:global(.svelte-calendar .weekdays) {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		text-align: center;
		font-size: 0.9rem;
		color: #333;
	}

	:global(.svelte-calendar .day) {
		text-align: center;
		padding: 0.5rem;
	}
</style>
