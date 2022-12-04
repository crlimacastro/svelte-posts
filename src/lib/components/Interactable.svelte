<script lang="ts">
	let className = '';
	export { className as class };
</script>

<div class={`bg-white hover:brightness-90 cursor-pointer transition-all ${className}`}>
	<slot />
</div>
