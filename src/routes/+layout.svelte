<script lang="ts">
	import '../app.css';
	import '../fonts.css';
	import Header from '../components/Header.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Acme Store</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
</svelte:head>
<div>
	<Header searchData={data.searchData} />
	<div class="px-6 sm:px-10 2xl:px-16">
		<slot />
	</div>
</div>
