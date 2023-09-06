<script>
	import MagnifyingGlass from '../../assets/icons/MagnifyingGlass.svelte';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Select from './Select.svelte';
</script>

<form method="get" autocomplete="off" class="flex gap-2">
	<Select className="w-28">
		<option value="All">All</option>
		<option value="Shoes">Shoes</option>
		<option value="Pants">Pants</option>
		<option value="T-Shirts">T-Shirts</option>
	</Select>
	<Input type="text" placeholder="Search products" name="searchQuery">
		<MagnifyingGlass slot="icon" />
	</Input>
	<Button type="submit">Search</Button>
</form>
