<script>
	import '../app.css';
	import Heading from '../components/ui/Heading.svelte';
</script>

<div>
	<header class="border-b border-b-zinc-200 px-12 py-6">
		<div class="flex gap-1">
			<Heading className="text-2xl">acme</Heading>
			<Heading className="font-normal text-2xl">store</Heading>
		</div>
	</header>
	<div class="px-12">
		<slot />
	</div>
</div>
