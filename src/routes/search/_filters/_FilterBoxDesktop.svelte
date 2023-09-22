<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Filters from './_Filters.svelte';

	export let searchParams: URLSearchParams;
</script>

<form
	class="flex h-fit w-80 flex-col gap-6 rounded-xl border border-zinc-200 px-8 py-6"
	autocomplete="off"
>
	<Filters {searchParams} />
	<Button type="submit" className="w-full">Apply filters</Button>
</form>
