<script>
	import GradientClock from '../assets/icons/GradientClock.svelte';
	import ProductListing from '../components/ProductListing.svelte';

	import Heading from '../components/ui/Heading.svelte';
</script>

<div class="flex w-full flex-col gap-8">
	<div class="flex items-center gap-2">
		<GradientClock dimensions="h-6 w-6" />
		<Heading>Last viewed</Heading>
	</div>
	<div class="flex w-full flex-col gap-2 bg-zinc-100 p-2">
		<ProductListing />
		<ProductListing />
	</div>
</div>
