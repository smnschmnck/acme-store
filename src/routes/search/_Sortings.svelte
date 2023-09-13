<script lang="ts">
	import Select from '../../components/ui/Select.svelte';
	import Button from '../../components/ui/Button.svelte';
	import { sortingsKeys, sortingsWithoutConfig } from './utils/sortings';

	export let category: string;
	export let searchQuery: string;
	export let currentSorting: string;
</script>

<form method="get" class="hidden items-center gap-4 sm:flex">
	<input type="hidden" name="category" value={category} />
	<input type="hidden" name="searchQuery" value={searchQuery} />
	<label class="text-sm font-medium" for="sortingSelect">Sort by: </label>
	<Select className="w-36" id="sortingSelect" name="sorting">
		{#each sortingsKeys as sorting}
			{#if sorting === currentSorting}
				<option value={sorting} selected>{sortingsWithoutConfig[sorting].name}</option>
			{/if}
			{#if sorting !== currentSorting}
				<option value={sorting}>{sortingsWithoutConfig[sorting].name}</option>
			{/if}
		{/each}
	</Select>
	<Button type="submit">Apply</Button>
</form>
