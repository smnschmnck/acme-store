<script>
	import MagnifyingGlass from '../../assets/icons/MagnifyingGlass.svelte';
	import Button from './Button.svelte';
</script>

<form
	method="get"
	autocomplete="off"
	class="flex h-10 rounded-lg bg-zinc-100 focus-within:outline focus-within:outline-1 focus-within:outline-blue-500"
>
	<select
		class="m-0.5 flex w-20 cursor-pointer appearance-none text-ellipsis rounded-l-md bg-white p-1 text-center text-xs font-medium hover:bg-zinc-50"
		name="category"
		id="category-select"
	>
		<option value="All">All</option>
		<option value="Shoes">Shoes</option>
		<option value="Pants">Pants</option>
		<option value="T-Shirts">T-Shirts</option>
	</select>
	<div class="flex w-72 items-center justify-center gap-1 px-2">
		<div class="text-zinc-500">
			<MagnifyingGlass />
		</div>
		<input
			type="text"
			placeholder="Search products"
			name="searchQuery"
			class="h-full w-full bg-transparent text-xs placeholder-zinc-500 outline-none placeholder:text-xs"
		/>
	</div>
	<Button type="submit" className="rounded-l-none">Search</Button>
</form>
