<script lang="ts">
	import Select from '../../components/ui/Select.svelte';
	import Button from '../../components/ui/Button.svelte';
	import { sortingsKeys, sortingsWithoutConfig } from './utils/sortings';
	import ParamsPersistor from '../../components/utils/ParamsPersistor.svelte';
	import { extractSearchParams } from './utils/searchParams';

	export let currentSorting: string;
	export let searchParams: URLSearchParams;
	const filterCategories = extractSearchParams(searchParams).rawFilterCategories;
</script>

<form method="get" class="hidden items-center gap-4 sm:flex">
	<ParamsPersistor
		allParams={searchParams}
		paramsToPersist={[
			...filterCategories,
			'category',
			'searchQuery',
			'productRating',
			'minPrice',
			'maxPrice',
			'minSellerRating',
			'maxSellerRating'
		]}
	/>
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
