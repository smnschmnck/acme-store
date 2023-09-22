<script lang="ts">
	import Details from '../../../components/ui/Details.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import Summary from '../../../components/ui/Summary.svelte';
	import LabeledCheckbox from './LabelCheckbox.svelte';
	import RatingSelect from './_RatingSelect.svelte';
</script>

<div class="flex h-fit flex-col gap-6">
	<input type="hidden" name="category" />
	<input type="hidden" name="searchQuery" />
	<input type="hidden" name="sorting" />
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Categories</h3>
		<Details>
			<Summary>Shoes</Summary>
			<div class="flex flex-col gap-0.5">
				<LabeledCheckbox id="category_sneakers" name="category_sneakers">Sneakers</LabeledCheckbox>
				<LabeledCheckbox id="category_boots" name="category_boots">Boots</LabeledCheckbox>
				<LabeledCheckbox id="category_crocs" name="category_crocs">Crocs</LabeledCheckbox>
				<LabeledCheckbox id="category_trainers" name="category_trainers">Trainers</LabeledCheckbox>
			</div>
		</Details>
		<Details>
			<Summary>Jackets</Summary>
			<LabeledCheckbox id="category_sneakers1" name="category_sneakersq">Sneakers</LabeledCheckbox>
		</Details>
		<Details>
			<Summary>Pants</Summary>
			<LabeledCheckbox id="category_sneakers2" name="category_sneakers2">Sneakers</LabeledCheckbox>
		</Details>
		<Details>
			<Summary>T-Shirts</Summary>
			<LabeledCheckbox id="category_sneakers3" name="category_sneakers3">Sneakers</LabeledCheckbox>
		</Details>
	</div>
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Product rating</h3>
		<div class="grid grid-cols-2 grid-rows-2 gap-2">
			<RatingSelect rating={4} />
			<RatingSelect rating={3} />
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
</div>
