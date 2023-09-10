<script lang="ts">
	import ProductListing from '../../components/ProductListing/ProductListing.svelte';
	import type { PageData } from './$types';
	import FiltersIcon from '../../assets/icons/FiltersIcon.svelte';
	import Sortings from './_Sortings.svelte';
	import Filters from './_filters/_Filters.svelte';

	export let data: PageData;

	$: products = data.products;
	$: productsAmount = products.length;
</script>

<div>
	<div class="flex items-center justify-between py-8 sm:py-14">
		<p class="font-medium">
			{productsAmount} results for <b>"{data.searchData.searchQuery}"</b>
		</p>
		<div class="block sm:hidden">
			<FiltersIcon />
		</div>
		<Sortings
			searchQuery={data.searchData.searchQuery}
			currentSorting={data.searchData.sorting}
			category={data.searchData.category}
		/>
	</div>
	<div class="flex w-full gap-8">
		<div class="hidden lg:block">
			<Filters />
		</div>
		<div class="flex w-full flex-col gap-6">
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
</div>
