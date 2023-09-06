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
<div class="flex gap-16 pt-10">
	<div class="bg-purple-300">
		<div class="flex items-center gap-2">
			<GradientFlame dimensions="h-6 w-6" />
			<Heading>Trending products</Heading>
		</div>
	</div>
	<div class="w-0.5 flex-initial bg-zinc-200" />
	<div class="flex w-full flex-col gap-8 bg-green-300">
		<div class="flex items-center gap-2">
			<GradientFlame dimensions="h-6 w-6" />
			<Heading>Last viewed</Heading>
		</div>
		<div class="flex w-full flex-col gap-2 bg-zinc-100 p-2">
			<ProductListing />
			<ProductListing />
		</div>
	</div>
</div>
