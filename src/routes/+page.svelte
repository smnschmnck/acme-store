<script lang="ts">
	import LastViewed from './_LastViewed.svelte';
	import PopularCategories from './_PopularCategories.svelte';
	import TrendingProducts from './_TrendingProducts.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div>
	<TrendingProducts trendingProducts={data.products} />
	<div class="flex flex-col gap-16 pt-10 lg:flex-row">
		<PopularCategories />
		<div class="w-0.5 flex-initial bg-zinc-200" />
		<LastViewed lastViewedProducts={data.products} />
	</div>
</div>
