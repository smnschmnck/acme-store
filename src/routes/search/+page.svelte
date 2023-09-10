<script lang="ts">
	import ProductListing from '../../components/ProductListing/ProductListing.svelte';
	import type { PageData } from './$types';
	import Select from '../../components/ui/Select.svelte';
	import Button from '../../components/ui/Button.svelte';
	import { sortingsKeys, sortingsWithoutConfig } from './sortings';
	import Filters from '../../assets/icons/FiltersIcon.svelte';

	export let data: PageData;

	$: products = data.products;
	$: productsAmount = products.length;

	let x = JSON.stringify(sortingsWithoutConfig);
</script>

<div>
	<div class="flex items-center justify-between py-8 sm:py-14">
		<p class="font-medium">
			{productsAmount} results for <b>"{data.searchData.searchQuery}"</b>
		</p>
		<div class="block sm:hidden">
			<Filters />
		</div>
		<form method="get" class="hidden items-center gap-4 sm:flex">
			<input type="hidden" name="category" value={data.searchData.category} />
			<input type="hidden" name="searchQuery" value={data.searchData.searchQuery} />
			<label class="text-sm font-medium" for="sortingSelect">Sort by: </label>
			<Select className="w-36" id="sortingSelect" name="sorting">
				{#each sortingsKeys as sorting}
					{#if sorting === data.searchData.sorting}
						<option value={sorting} selected>{sortingsWithoutConfig[sorting].name}</option>
					{/if}
					{#if sorting !== data.searchData.sorting}
						<option value={sorting}>{sortingsWithoutConfig[sorting].name}</option>
					{/if}
				{/each}
			</Select>
			<Button type="submit">Apply</Button>
		</form>
	</div>
	<div class="flex flex-col gap-6">
		{#each products as p}
			<div class="border-b border-b-zinc-300 pb-4">
				<ProductListing
					classOverrides="p-0"
					id={p.id}
					name={p.name}
					price={p.price}
					rating={p.rating}
					seller={p.seller}
				/>
			</div>
		{/each}
	</div>
</div>
