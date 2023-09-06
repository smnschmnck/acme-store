<script>
	import MagnifyingGlass from '../../assets/icons/MagnifyingGlass.svelte';
	import Button from './Button.svelte';
	import Input from './Input.svelte';
	import Select from './Select.svelte';
</script>

<form method="get" autocomplete="off" class="flex gap-2">
	<div class="w-28">
		<Select>
			<option value="All">All</option>
			<option value="Shoes">Shoes</option>
			<option value="Pants">Pants</option>
			<option value="T-Shirts">T-Shirts</option>
		</Select>
	</div>
	<div class="w-80">
		<Input type="text" placeholder="Search products" name="searchQuery">
			<MagnifyingGlass slot="icon" />
		</Input>
	</div>
	<Button type="submit">Search</Button>
</form>
