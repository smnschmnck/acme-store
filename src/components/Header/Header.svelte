<script lang="ts">
	import ShoppingCartLink from './ShoppingCartLink.svelte';
	import Heading from '../ui/Heading.svelte';
	import SearchBar from '../ui/SearchBar.svelte';
	import MobileMenu from './MobileMenu.svelte';
	import LogoLink from '../ui/LogoLink.svelte';

	export let searchData: {
		searchQuery: string;
		category: string;
		allCategories: string[];
	};
	export let shoppingCartProductCount: number;
</script>

<header
	class="flex items-center justify-between gap-4 border-b border-b-zinc-200 px-6 py-4 sm:px-10 md:h-24 md:py-0 2xl:px-16"
>
	<div class="flex w-full flex-col gap-2 md:flex-row md:gap-16">
		<div class="flex justify-between">
			<LogoLink />
			<div class="flex items-center gap-4 md:hidden">
				<ShoppingCartLink productCount={shoppingCartProductCount} />
				<MobileMenu id="burgerMenuMd" />
			</div>
		</div>
		<nav class="flex w-full items-center gap-4 md:gap-12">
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
		</nav>
	</div>
	<div class="hidden md:block">
		<ShoppingCartLink productCount={shoppingCartProductCount} />
	</div>
	<div class="hidden md:block xl:hidden">
		<MobileMenu id="burgerMenuSm" />
	</div>
</header>
