<script>
	import { goto } from '$app/navigation';

	let { head, info } = $props();
</script>

<div class="formProfil">
	<h4>{head}</h4>
	<p>{info}</p>
</div>
