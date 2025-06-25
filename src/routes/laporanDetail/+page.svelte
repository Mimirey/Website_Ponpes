<script>
import FormHealth from '$lib/components/FormHealth.svelte';
  export let data;

  const { detail, date, time } = data;
</script>

<FormHealth laporan={detail}/>

