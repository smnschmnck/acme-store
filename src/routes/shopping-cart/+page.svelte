<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	let { products } = data;
</script>

<h1>Shopping Cart</h1>
{#if products.length <= 0}
	<h2>No products in shopping cart</h2>
{/if}
{#if products.length > 0}
	<ul>
		{#each products as product}
			<li>{product.name}</li>
		{/each}
	</ul>
{/if}
