<script lang="ts">
	import ArrowRight from '../assets/icons/ArrowRightIcon.svelte';
	import GradientFlame from '../assets/icons/GradientFlameIcon.svelte';
	import ProductListing from '../components/ProductListing/ProductListing.svelte';
	import type { ProductListingProps } from '../components/ProductListing/types';
	import Heading from '../components/ui/Heading.svelte';

	export let trendingProducts: ProductListingProps[];
	const firstFour = trendingProducts.slice(0, 4);
</script>

<div class="flex flex-col gap-6 pt-10">
	<div class="flex items-center gap-2">
		<GradientFlame dimensions="h-6 w-6" />
		<Heading>Trending products</Heading>
	</div>
	<div class="flex flex-col gap-2 bg-zinc-100 p-2 lg:flex-row">
		<div class="grid w-full grid-cols-2 grid-rows-2 gap-2">
			{#each firstFour as p}
				<ProductListing
					id={p.id}
					name={p.name}
					price={p.price}
					rating={p.rating}
					seller={p.seller}
				/>
			{/each}
		</div>
	</div>
	<div class="flex w-full justify-end">
		<a
			href="/"
			class="flex items-center gap-2 border-b border-b-transparent text-sm font-medium text-blue-500 hover:border-b-blue-500"
		>
			See more trending products
			<ArrowRight dimensions="h-4 w-4" />
		</a>
	</div>
</div>
