<script>
	import '../app.css';
	import Header from '../components/Header.svelte';
	import Heading from '../components/ui/Heading.svelte';
</script>

<div>
	<Header />
	<div class="px-12">
		<slot />
	</div>
</div>
