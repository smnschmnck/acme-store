<script lang="ts">
	import ProductListing from '../../components/ProductListing/ProductListing.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: products = data.products;
</script>

<div>
	{#each products as p}
		<div class="border-b border-b-zinc-300">
			<ProductListing id={p.id} name={p.name} price={p.price} rating={p.rating} seller={p.seller} />
		</div>
	{/each}
</div>
