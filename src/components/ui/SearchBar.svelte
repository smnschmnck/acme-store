<script lang="ts">
	import MagnifyingGlass from '../../assets/icons/MagnifyingGlassIcon.svelte';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Select from './Select.svelte';

	export let searchQuery: string;
	export let category: string;
	export let allCategories: string[];
</script>

<form method="get" action="/search" autocomplete="off" class="flex w-full gap-2 md:w-fit">
	<div class="hidden w-48 sm:block">
		<Select name="category" id="category-select">
			<option value="All">All</option>
			{#each allCategories as c}
				{#if category === c}
					<option value={c} selected>{c}</option>
				{/if}
				{#if category !== c}
					<option value={c}>{c}</option>
				{/if}
			{/each}
		</Select>
	</div>
	<Input value={searchQuery} type="text" placeholder="Search products" name="searchQuery">
		<MagnifyingGlass slot="startAdornment" />
	</Input>
	<Button type="submit">Search</Button>
</form>
