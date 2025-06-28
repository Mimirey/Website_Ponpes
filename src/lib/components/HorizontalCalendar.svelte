<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import dayjs from 'dayjs';
  import weekday from 'dayjs/plugin/weekday';
  import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
  import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

  dayjs.extend(weekday);
  dayjs.extend(isSameOrAfter);
  dayjs.extend(isSameOrBefore);

  export let initialDate: Date = new Date(); 
  const dispatch = createEventDispatcher();

  let current = dayjs(initialDate); 
  let startOfWeek = current.weekday(0); 
  let selected = current;

  function nextWeek() {
    startOfWeek = startOfWeek.add(1, 'week');
  }

  function prevWeek() {
    startOfWeek = startOfWeek.subtract(1, 'week');
  }

  function pilihTanggal(tanggal) {
    console.log('🖱️ Klik:', tanggal.format('YYYY-MM-DD'));
    selected = tanggal;
    dispatch('change', tanggal.toDate());
  }

  const hari = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
</script>

<div class="w-full space-y-2">
  <!-- Header Bulan -->
  <div class="flex justify-between items-center px-2">
    <button on:click={prevWeek}>&larr;</button>
    <h2 class="text-sm font-semibold text-center">{startOfWeek.format('MMMM YYYY')}</h2>
    <button on:click={nextWeek}>&rarr;</button>
  </div>

  <!-- Label Hari -->
  <div class="flex justify-between px-2 text-xs font-medium text-gray-500">
    {#each hari as h}
      <div class="w-10 text-center">{h}</div>
    {/each}
  </div>

  <!-- Baris Tanggal -->
  <div class="flex justify-between px-2">
{#each Array(7) as _, i}
  {@const tanggal = startOfWeek.clone().add(i, 'day')}
  <button on:click={() => pilihTanggal(tanggal)}>
    {tanggal.date()}
  </button>
{/each}
  </div>
</div>