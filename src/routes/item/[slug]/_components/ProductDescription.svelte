<script lang="ts">
	export let description: string;
</script>

<div id="productDescription" class="flex flex-col gap-4 border-t border-t-zinc-200 pt-8">
	{@html description}
</div>

<style>
	#productDescription {
		@apply text-sm;
	}

	#productDescription :global(h2) {
		@apply text-lg font-medium;
	}

	#productDescription :global(li) {
		@apply py-1;
	}

	#productDescription :global(ul li) {
		@apply list-disc;
	}

	#productDescription :global(ol li) {
		@apply list-decimal;
	}
</style>
