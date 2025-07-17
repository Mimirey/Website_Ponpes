<script lang="ts">
    import {createEventDispatcher} from 'svelte';
    import { onMount } from 'svelte';



    const dispatch= createEventDispatcher();
    let selectedTime: string = 'PAGI';

    const option= ['PAGI', 'SIANG', 'MALAM'];

    function onSelect (event: Event){
        selectedTime =(event.target as HTMLSelectElement).value;
        dispatch('change',selectedTime);
    }
    onMount(() => {
	dispatch('change', selectedTime);
});

</script>

<select class="border px-3 py-2 rounded" bind:value={selectedTime} on:change={onSelect}>

    {#each option as option}
        <option value={option}>{option}</option>
    {/each}
</select>