<script lang="ts">
	import ProductListing from '../../components/ProductListing/ProductListing.svelte';
	import Button from '../../components/ui/Button.svelte';
	import ButtonGhost from '../../components/ui/ButtonGhost.svelte';
	import Heading from '../../components/ui/Heading.svelte';
	import Input from '../../components/ui/Input.svelte';
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
				<li
					class="flex w-full flex-col justify-between gap-4 border-b border-b-zinc-200 pb-4 md:flex-row"
				>
					<ProductListing
						classOverrides="p-0"
						id={product.id}
						name={product.name}
						price={product.price}
						rating={product.rating}
						seller={product.seller}
					/>
					<div class="flex w-full flex-col gap-8 md:items-end">
						<form class="flex gap-4" action="?/updateAmount" method="post">
							<input type="hidden" name="productId" value={product.id} />
							<div class="w-32">
								<Input name="amount" type="number" value={String(product.amount)} />
							</div>
							<Button type="submit">Update</Button>
						</form>
						<form action="?/deleteProduct" method="post">
							<input type="hidden" name="productId" value={product.id} />
							<ButtonGhost type="submit" className="text-red-500 hover:text-red-700"
								>Delete</ButtonGhost
							>
						</form>
					</div>
				</li>
			{/each}
		</ul>
		<Button>Buy Now</Button>
	{/if}
</div>
