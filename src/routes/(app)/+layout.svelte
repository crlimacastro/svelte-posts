<script lang="ts">
	import '../../styles/tailwind.css';
	import '../../styles/global.css';
	import NavBar from './NavBar.svelte';
</script>

<div class="p-4 flex flex-col gap-8 h-full">
	<header class="flex flex-col gap-4">
		<a href="/" class="font-bold">POSTS</a>
		<NavBar />
	</header>

	<main class="h-full">
		<slot />
	</main>
</div>
