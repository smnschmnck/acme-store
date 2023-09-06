<script>
	import ShoppingCart from '../assets/icons/ShoppingCart.svelte';
	import Heading from './ui/Heading.svelte';
	import SearchBar from './ui/SearchBar.svelte';
</script>

<header class="flex h-24 items-center justify-between border-b border-b-zinc-200 px-16">
	<div class="flex gap-16">
		<a href="/" class="flex items-center gap-1">
			<Heading>acme</Heading>
			<Heading className="font-normal">store</Heading>
		</a>
		<div class="flex items-center gap-12">
			<SearchBar />
			<div class="flex gap-8 text-sm text-zinc-500">
				<a class="transition hover:text-black" href="/">See order details</a>
				<a class="transition hover:text-black" href="/">Rate an order</a>
				<a class="transition hover:text-black" href="/">Wishlist</a>
			</div>
		</div>
	</div>
	<a href="/" class="relative rounded-lg p-2 transition hover:bg-zinc-100">
		<span
			class="absolute right-0 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs font-medium text-white"
			>2</span
		>
		<ShoppingCart />
	</a>
</header>
