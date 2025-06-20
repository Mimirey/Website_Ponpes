<script>
	import { goto } from '$app/navigation';

	function preventDefaultHandler(fn) {
		return (event) => {
			event.preventDefault();
			fn.call(this, [event]);
		};
	}
</script>

<nav>
	<a href="/dashboard" onclick={preventDefaultHandler(() => goto('/dashboard'))}>Home</a>
	<!-- <a href="/reports" onclick|preventDefault={() => goto('/reports')}>Reports</a>
	<a href="/profile" onclick|preventDefault={() => goto('/profile')}>Profile</a> -->
	<a href="/reports" onclick={preventDefaultHandler(() => goto('/reports'))}>Reports</a>
	<a href="/profile" onclick={preventDefaultHandler(() => goto('/profile'))}>Profile</a>
</nav>
