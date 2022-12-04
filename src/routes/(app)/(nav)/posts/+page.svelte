<script lang="ts">
	import Interactable from '$lib/components/Interactable.svelte';
	import type { PageData } from './$types';
	import type { Props } from './interfaces';
	export let data: PageData;
	const { posts } = data.props as Props;
</script>

<h1 class="font-bold pb-4">Posts</h1>
<ul class="flex flex-col gap-2">
	{#each posts as post (post.id)}
		<li>
			<Interactable class="p-1">
				<a data-sveltekit-preload-data href={`/posts/${post.id}`}>
					<h2 class="font-bold">{post.title}</h2>
				</a>
			</Interactable>
		</li>
	{/each}
</ul>
