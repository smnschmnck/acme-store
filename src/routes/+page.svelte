<script lang="ts">
	import LastViewed from './_LastViewed.svelte';
	import PopularCategories from './_PopularCategories.svelte';
	import TrendingProducts from './_TrendingProducts.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<TrendingProducts trendingProducts={data.products} />
	<div class="flex flex-col-reverse gap-8 pt-10 lg:flex-row lg:gap-16">
		<PopularCategories />
		<div class="hidden w-0.5 flex-initial bg-zinc-200 lg:block" />
		<LastViewed lastViewedProducts={data.products} />
	</div>
</div>
