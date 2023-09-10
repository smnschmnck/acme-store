<script lang="ts">
	import Button from '../../../components/ui/Button.svelte';
	import RatingSelect from './_RatingSelect.svelte';
</script>

<form class="flex h-fit w-80 flex-col gap-4 rounded-xl border border-zinc-200 px-8 py-6">
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Categories</h3>
		<details>
			<summary>Shoes</summary>
			<div class="flex flex-col gap-0.5">
				<label class="pl-4 text-zinc-500">
					<input type="checkbox" name="" id="" />
					Sneakers
				</label>
				<label class="pl-4 text-zinc-500">
					<input type="checkbox" name="" id="" />
					Boots
				</label>
				<label class="pl-4 text-zinc-500">
					<input type="checkbox" name="" id="" />
					Crocs
				</label>
				<label class="pl-4 text-zinc-500">
					<input type="checkbox" name="" id="" />
					Trainers
				</label>
			</div>
		</details>
		<details>
			<summary>Jackets</summary>
			<label class="pl-4 text-zinc-500">
				<input type="checkbox" name="" id="" />
				Sneakers
			</label>
		</details>
		<details>
			<summary>Pants</summary>
			<label class="pl-4 text-zinc-500">
				<input type="checkbox" name="" id="" />
				Sneakers
			</label>
		</details>
		<details>
			<summary>T-Shirts</summary>
			<label class="pl-4 text-zinc-500">
				<input type="checkbox" name="" id="" />
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
	<Button className="w-full">Apply filters</Button>
</form>
