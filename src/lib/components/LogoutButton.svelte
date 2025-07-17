<script lang="ts">
	import { toast } from 'svelte-sonner';
	import { goto } from '$app/navigation';
	import { LogOut } from 'lucide-svelte'; // atau pakai icon lain kalau kamu pakai shadcn/lucide

	async function handleLogout() {
		await fetch('/api/logout', { method: 'POST' });
		goto('/login');
	}

	function confirmLogout() {
		toast('Yakin ingin logout?', {
			action: {
				label: 'Ya',
				onClick: () => handleLogout(),
				className: 'bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition'
			},
			cancel: {
				label: 'Batal',
				className: 'text-gray-700 hover:underline px-4'
			}
		});
	}
</script>

<button
	on:click={confirmLogout}
	class="flex items-center gap-2 text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg shadow transition duration-200"
>
	<LogOut class="w-5 h-5" />
	<span>Logout</span>
</button>