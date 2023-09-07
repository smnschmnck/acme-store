<script lang="ts">
	import GradientClock from '../assets/icons/GradientClock.svelte';
	import ProductListing from '../components/ProductListing/ProductListing.svelte';
	import type { ProductListingProps } from '../components/ProductListing/types';

	import Heading from '../components/ui/Heading.svelte';

	export let lastViewedProducts: ProductListingProps[];
	const lastTwoViewedProducts = lastViewedProducts.slice(0, 2);
</script>

<div class="flex w-full flex-col gap-8">
	<div class="flex items-center gap-2">
		<GradientClock dimensions="h-6 w-6" />
		<Heading>Last viewed</Heading>
	</div>
	<div class="flex w-full flex-col gap-2 bg-zinc-100 p-2">
		{#each lastTwoViewedProducts as p}
			<ProductListing
				id={p.id}
				name={p.name}
				price={p.price}
				category={p.category}
				rating={p.rating}
				seller={p.seller}
			/>
		{/each}
	</div>
</div>
