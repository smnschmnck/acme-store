<script lang="ts">
	import ProductListing from '../../components/ProductListing/ProductListing.svelte';
	import type { PageData } from './$types';
	import FiltersIcon from '../../assets/icons/FiltersIcon.svelte';
	import Sortings from './_Sortings.svelte';
	import FilterBoxDesktop from './_filters/_FilterBoxDesktop.svelte';
	import { page } from '$app/stores';

	export let data: PageData;

	$: products = data.products;
	$: productsAmount = products.length;
	$: searchData = data.searchData;
	$: searchParams = $page.url.searchParams;
</script>

<div>
	<div class="flex items-center justify-between py-6 sm:py-10">
		<p class="font-medium">
			{productsAmount} results for <b>"{data.searchData.searchQuery}"</b>
		</p>
		<div class="flex items-center gap-6">
			<div class="hidden sm:block">
				<Sortings {searchParams} currentSorting={searchData.sorting} />
			</div>
			<div class="block lg:hidden">
				<FiltersIcon />
			</div>
		</div>
	</div>
	<div class="flex w-full gap-8">
		<div class="hidden lg:block">
			<FilterBoxDesktop {searchParams} />
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
