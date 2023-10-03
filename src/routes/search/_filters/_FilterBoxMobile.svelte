<script lang="ts">
	import FiltersIcon from '../../../assets/icons/FiltersIcon.svelte';
	import Button from '../../../components/ui/Button.svelte';
	import Filters from './_Filters.svelte';

	export let searchParams: URLSearchParams;
</script>

<input
	type="checkbox"
	id="filters_checkbox"
	class="peer absolute m-0 h-0 w-0 appearance-none border-none p-0 opacity-0 outline-none"
/>
<label for="filters_checkbox" class="peer-focus:outline">
	<FiltersIcon />
</label>
<label
	class="fixed bottom-0 right-0 z-10 hidden h-full w-full items-end justify-end peer-checked:flex"
	for="filters_checkbox"
>
	<label
		for="x"
		class="z-20 h-1/2 w-full rounded-t-2xl border border-zinc-100 bg-white p-6 shadow-up"
	>
		<form class="flex h-full flex-col gap-4">
			<div class="flex justify-between">
				<h2 class="font-bold">Filters</h2>
				<label class="focus:outline" for="filters_checkbox">Close</label>
			</div>
			<div class="h-full overflow-y-scroll p-1">
				<Filters {searchParams} />
			</div>
			<div class="min-h-fit p-1">
				<Button type="submit" className="w-full">Apply filters</Button>
			</div>
		</form>
	</label>
</label>
