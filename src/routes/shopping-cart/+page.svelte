<script lang="ts">
	import ProductListing from '../../components/ProductListing/ProductListing.svelte';
	import Button from '../../components/ui/Button.svelte';
	import Heading from '../../components/ui/Heading.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let { products } = data;
</script>

<div class="flex flex-col gap-8 pt-10">
	<Heading>Shopping Cart</Heading>
	{#if products.length <= 0}
		<h2>No products in shopping cart</h2>
	{/if}
	{#if products.length > 0}
		<ul class="flex flex-col gap-4">
			{#each products as product}
				<li class="flex w-full border-b border-b-zinc-200 pb-4">
					<ProductListing
						classOverrides="p-0"
						id={product.id}
						name={product.name}
						price={product.price}
						rating={product.rating}
						seller={product.seller}
					/>
					<div class="flex flex-col gap-4">
						<span>Amount {product.amount}</span>
						<form action="?/deleteProduct" method="post">
							<input type="hidden" name="productId" value={product.id} />
							<Button className="text-white bg-red-500">Delete</Button>
						</form>
					</div>
				</li>
			{/each}
		</ul>
		<Button>Buy Now</Button>
	{/if}
</div>
