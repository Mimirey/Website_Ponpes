<script>
	import { goto } from '$app/navigation';
	// export let name;
	// change to props
	let { name = 'Submit' } = $props();
</script>

<button type="submit">{name}</button>
