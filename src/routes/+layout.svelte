<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Acme Store</title>
</svelte:head>
<div>
	<Header searchData={data.searchData} />
	<div class="px-4 sm:px-10 2xl:px-16">
		<slot />
	</div>
</div>
