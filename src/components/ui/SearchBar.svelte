<script>
	import MagnifyingGlass from '../../assets/icons/MagnifyingGlass.svelte';
	import Button from './Button.svelte';
	import Select from './Select.svelte';
</script>

<form
	method="get"
	autocomplete="off"
	class="flex h-10 overflow-hidden rounded-lg bg-zinc-100 focus-within:outline focus-within:outline-1 focus-within:outline-blue-500"
>
	<Select className="rounded-none w-28">
		<option value="All">All</option>
		<option value="Shoes">Shoes</option>
		<option value="Pants">Pants</option>
		<option value="T-Shirts">T-Shirts</option>
	</Select>
	<div class="flex w-80 items-center justify-center gap-1 px-2">
		<div class="text-zinc-500">
			<MagnifyingGlass />
		</div>
		<input
			type="text"
			placeholder="Search products"
			name="searchQuery"
			class="h-full w-full bg-transparent text-sm placeholder-zinc-500 outline-none placeholder:text-sm"
		/>
	</div>
	<Button type="submit" className="rounded-none">Search</Button>
</form>
