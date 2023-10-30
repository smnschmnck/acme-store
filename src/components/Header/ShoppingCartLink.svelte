<script lang="ts">
	import ShoppingCart from '../../assets/icons/ShoppingCartIcon.svelte';

	export let productCount: number;
</script>

<a
	href="/shopping-cart"
	class="relative flex h-10 w-10 items-center justify-center rounded-lg p-2 transition hover:bg-zinc-100"
>
	{#if productCount > 0}
		<span
			class="absolute right-0 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white"
			>{productCount}</span
		>
	{/if}
	<ShoppingCart />
</a>
