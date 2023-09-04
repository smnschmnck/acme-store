<script>
	import Heading from './ui/Heading.svelte';
	import SearchBar from './ui/SearchBar.svelte';
</script>

<header class="flex h-24 items-center justify-between border-b border-b-zinc-200 px-12">
	<div class="flex gap-16">
		<a href="/" class="flex items-center gap-1">
			<Heading className="text-2xl">acme</Heading>
			<Heading className="font-normal text-2xl">store</Heading>
		</a>
		<div>
			<SearchBar />
		</div>
	</div>
</header>
