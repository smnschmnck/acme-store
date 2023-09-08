<script lang="ts">
	import BurgerMenu from '../assets/icons/BurgerMenu.svelte';
	import ShoppingCartLink from './ShoppingCartLink.svelte';
	import Heading from './ui/Heading.svelte';
	import SearchBar from './ui/SearchBar.svelte';

	export let searchData: {
		searchQuery: string;
		category: string;
		allCategories: string[];
	};
</script>

<header
	class="flex items-center justify-between gap-4 border-b border-b-zinc-200 px-4 py-4 sm:px-10 md:h-24 md:py-0 2xl:px-16"
>
	<div class="flex w-full flex-col gap-2 md:flex-row md:gap-16">
		<div class="flex justify-between">
			<a href="/" class="flex items-center gap-1">
				<Heading>acme</Heading>
				<Heading className="font-normal">store</Heading>
			</a>
			<div class="flex items-center gap-4 md:hidden">
				<ShoppingCartLink />
				<BurgerMenu />
			</div>
		</div>
		<div class="flex w-full items-center gap-4 md:gap-12">
			<SearchBar
				searchQuery={searchData.searchQuery}
				category={searchData.category}
				allCategories={searchData.allCategories}
			/>
			<div class="hidden gap-8 text-sm text-zinc-500 xl:flex">
				<a class="whitespace-nowrap transition hover:text-black" href="/">See order details</a>
				<a class="whitespace-nowrap transition hover:text-black" href="/">Rate an order</a>
				<a class="whitespace-nowrap transition hover:text-black" href="/">Wishlist</a>
			</div>
		</div>
	</div>
	<div class="hidden md:block">
		<ShoppingCartLink />
	</div>
	<div class="hidden md:block xl:hidden">
		<BurgerMenu />
	</div>
</header>
