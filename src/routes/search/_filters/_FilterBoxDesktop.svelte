<script>
	import Button from '../../../components/ui/Button.svelte';
	import Filters from './_Filters.svelte';
</script>

<form class="flex h-fit w-80 flex-col gap-6 rounded-xl border border-zinc-200 px-8 py-6">
	<Filters />
	<Button type="submit" className="w-full">Apply filters</Button>
</form>
