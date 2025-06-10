<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch= createEventDispatcher();

    let selectedMonth= new Date().toISOString().slice(0,7);

    function handleChange(event) {
    selectedMonth = event.target.value;
    dispatch('change', { month: selectedMonth });
  }
</script>

<div class="month-picker">
  <label for="month">Selected Month:</label>
  <input type="month" id="month" bind:value={selectedMonth} on:change={handleChange} />
</div>