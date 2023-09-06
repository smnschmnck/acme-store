<script>
	import GradientFlame from '../assets/icons/GradientFlame.svelte';
	import ProductListing from '../components/ProductListing.svelte';
	import Heading from '../components/ui/Heading.svelte';
</script>

<div class="flex flex-col gap-6 pt-10">
	<div class="flex items-center gap-2">
		<GradientFlame dimensions="h-6 w-6" />
		<Heading>Trending products</Heading>
	</div>
	<div class="flex gap-2 bg-zinc-100 p-2">
		<div class="flex w-full flex-col gap-2">
			<ProductListing />
			<ProductListing />
		</div>
		<div class="flex w-full flex-col gap-2">
			<ProductListing />
			<ProductListing />
		</div>
	</div>
</div>
