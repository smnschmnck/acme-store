<script lang="ts">
	import '../app.css';
	import '../fonts.css';
	import Header from '../components/Header.svelte';
	import type { LayoutData } from './$types';
	import Heading from '../components/ui/Heading.svelte';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Acme Store</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
</svelte:head>
<div class="relative min-h-screen">
	<Header searchData={data.searchData} shoppingCartProductCount={data.shoppingCartProductCount} />
	<div class="px-6 pb-48 sm:px-10 2xl:px-16">
		<slot />
	</div>
	<footer class="absolute bottom-0 h-32 w-full bg-zinc-100 px-6 py-6 sm:px-10 2xl:px-16">
		<a href="/" class="flex items-center gap-1">
			<Heading>acme</Heading>
			<Heading className="font-normal">store</Heading>
		</a>
	</footer>
</div>
