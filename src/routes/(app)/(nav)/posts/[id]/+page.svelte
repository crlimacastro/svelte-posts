<script lang="ts">
	import type { PageData } from './$types';
	import LeftArrow from '$lib/components/LeftArrow.svelte';
	import Interactable from '$lib/components/Interactable.svelte';

	export let data: PageData;
</script>

{#if data.props?.post}
	<div class="flex items-center gap-4 h-full">
		{#if data.props?.prev}
			<Interactable
				><a data-sveltekit-preload-data href={`./${Math.max((data.props?.post?.id || 2) - 1, 1)}`}
					><LeftArrow /></a
				></Interactable
			>
		{/if}
		<div>
			<h1 class="font-bold pb-4">{data.props?.post?.title}</h1>
			<p>{data.props?.post?.body}</p>
		</div>
		{#if data.props?.next}
			<Interactable
				><a data-sveltekit-preload-data href={`./${(data.props?.post?.id || 2) + 1}`}
					><LeftArrow class="rotate-180" /></a
				></Interactable
			>
		{/if}
	</div>
{/if}
