<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<svelte:head>
	<title>Acme Store</title>
</svelte:head>
<div>
	<Header />
	<div class="px-16">
		<slot />
	</div>
</div>
