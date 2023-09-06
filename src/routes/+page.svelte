<script>
	import LastViewed from './_LastViewed.svelte';
	import PopularCategories from './_PopularCategories.svelte';
	import TrendingProducts from './_TrendingProducts.svelte';
</script>

<TrendingProducts />
<div class="flex gap-16 pt-10">
	<PopularCategories />
	<div class="w-0.5 flex-initial bg-zinc-200" />
	<LastViewed />
</div>
