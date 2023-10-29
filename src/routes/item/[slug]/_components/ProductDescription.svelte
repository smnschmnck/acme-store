<script lang="ts">
	export let description: string;
</script>

<div id="productDescription" class="flex flex-col gap-4 border-t border-t-zinc-200 pt-8">
	{@html description}
</div>

<style>
	#productDescription :global(h2) {
		font-size: large;
		font-weight: bold;
	}
</style>
