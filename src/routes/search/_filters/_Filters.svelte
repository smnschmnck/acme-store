<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import RatingSelect from './_RatingSelect.svelte';
</script>

<form class="flex h-fit w-80 flex-col gap-6 rounded-xl border border-zinc-200 px-8 py-6">
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Categories</h3>
		<details>
			<summary>Shoes</summary>
			<div class="flex flex-col gap-0.5">
				<label class="pl-4 text-zinc-500">
					<input type="checkbox" name="category_sneakers" />
					Sneakers
				</label>
				<label class="pl-4 text-zinc-500">
					<input type="checkbox" name="category_boots" />
					Boots
				</label>
				<label class="pl-4 text-zinc-500">
					<input type="checkbox" name="category_crocs" />
					Crocs
				</label>
				<label class="pl-4 text-zinc-500">
					<input type="checkbox" name="category_trainers" />
					Trainers
				</label>
			</div>
		</details>
		<details>
			<summary>Jackets</summary>
			<label class="pl-4 text-zinc-500">
				<input type="checkbox" name="category_sneakers" />
				Sneakers
			</label>
		</details>
		<details>
			<summary>Pants</summary>
			<label class="pl-4 text-zinc-500">
				<input type="checkbox" name="category_sneakers" />
				Sneakers
			</label>
		</details>
		<details>
			<summary>T-Shirts</summary>
			<label class="pl-4 text-zinc-500">
				<input type="checkbox" name="category_sneakers" />
				Sneakers
			</label>
		</details>
	</div>
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Product rating</h3>
		<div class="flex gap-2">
			<RatingSelect rating={4} />
			<RatingSelect rating={3} />
		</div>
		<div class="flex gap-2">
			<RatingSelect rating={2} />
			<RatingSelect rating={1} />
		</div>
	</div>
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Price range</h3>
		<div class="flex items-center gap-4">
			<Input placeholder="Min." name="minPrice">
				<span class="text-black" slot="startAdornment">$</span>
			</Input>
			<div class="h-0.5 w-24 bg-zinc-200" />
			<Input placeholder="Max." name="maxPrice">
				<span class="text-black" slot="startAdornment">$</span>
			</Input>
		</div>
	</div>
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Seller rating</h3>
		<div class="flex items-center gap-4">
			<Input placeholder="Min." name="minSellerRating">
				<span class="text-black" slot="endAdornment">%</span>
			</Input>
			<div class="h-0.5 w-24 bg-zinc-200" />
			<Input placeholder="Max." name="maxSellerRating">
				<span class="text-black" slot="endAdornment">%</span>
			</Input>
		</div>
	</div>
	<Button type="submit" className="w-full">Apply filters</Button>
</form>
