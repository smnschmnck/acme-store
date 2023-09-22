<script lang="ts">
	import Details from '../../../components/ui/Details.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import Summary from '../../../components/ui/Summary.svelte';
	import ParamsPersistor from '../../../components/utils/ParamsPersistor.svelte';
	import LabeledCheckbox from './LabelCheckbox.svelte';
	import RatingSelect from './_RatingSelect.svelte';
	import { exampleCategories } from './exampleCategories';

	export let searchParams: URLSearchParams;

	const getProductRating = () => {
		const productRatingString = searchParams.get('productRating');
		if (productRatingString) {
			return Number(productRatingString);
		}
	};

	let productRating = getProductRating();
</script>

<div class="flex h-fit flex-col gap-6">
	<ParamsPersistor
		paramsToPersist={['category', 'searchQuery', 'sorting']}
		allParams={searchParams}
	/>
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Categories</h3>
		{#each exampleCategories as c}
			<Details>
				<Summary>{c.category}</Summary>
				<div class="flex flex-col gap-0.5">
					{#each c.subCategories as subCategory}
						<LabeledCheckbox
							id={`category_${c.category}_${subCategory}`}
							name={`category_${c.category}_${subCategory}`}>{subCategory}</LabeledCheckbox
						>
					{/each}
				</div>
			</Details>
		{/each}
	</div>
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Product rating</h3>
		<div class="grid grid-cols-2 grid-rows-2 gap-2">
			{#each { length: 4 } as _, i}
				{#if productRating === 4 - i}
					<RatingSelect rating={4 - i} selected />
				{:else}
					<RatingSelect rating={4 - i} />
				{/if}
			{/each}
		</div>
	</div>
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Price range</h3>
		<div class="flex items-center gap-4">
			<Input placeholder="Min." name="minPrice" value={searchParams.get('minPrice') ?? ''}>
				<span class="text-black" slot="startAdornment">$</span>
			</Input>
			<div class="h-0.5 w-24 bg-zinc-200" />
			<Input placeholder="Max." name="maxPrice" value={searchParams.get('maxPrice') ?? ''}>
				<span class="text-black" slot="startAdornment">$</span>
			</Input>
		</div>
	</div>
	<div class="flex flex-col gap-2 text-sm font-medium">
		<h3 class="text-sm font-bold">Seller rating</h3>
		<div class="flex items-center gap-4">
			<Input
				placeholder="Min."
				name="minSellerRating"
				value={searchParams.get('minSellerRating') ?? ''}
			>
				<span class="text-black" slot="endAdornment">%</span>
			</Input>
			<div class="h-0.5 w-24 bg-zinc-200" />
			<Input
				placeholder="Max."
				name="maxSellerRating"
				value={searchParams.get('maxSellerRating') ?? ''}
			>
				<span class="text-black" slot="endAdornment">%</span>
			</Input>
		</div>
	</div>
</div>
