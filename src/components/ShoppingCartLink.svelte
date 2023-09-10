<script>
	import ShoppingCart from '../assets/icons/ShoppingCartIcon.svelte';
</script>

<a
	href="/shoppingCart"
	class="relative flex h-10 w-10 items-center justify-center rounded-lg p-2 transition hover:bg-zinc-100"
>
	<span
		class="absolute right-0 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white"
		>2</span
	>
	<ShoppingCart />
</a>
