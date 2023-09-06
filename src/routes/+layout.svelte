<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<div>
	<Header />
	<div class="px-16">
		<slot />
	</div>
</div>
