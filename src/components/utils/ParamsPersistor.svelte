<script lang="ts">
	import type { SearchParams } from '../../routes/search/types';

	//TODO find out how to use proper generics
	type T = SearchParams;
	//type T = $$Generic<string>;
	export let paramsToPersist: T[];
	export let allParams: URLSearchParams;
</script>

{#each paramsToPersist as param}
	{#if allParams.get(param)}
		<input type="hidden" name={param} value={allParams.get(param)} />
	{/if}
{/each}
