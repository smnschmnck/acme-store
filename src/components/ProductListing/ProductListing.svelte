<script lang="ts">
	import type { Sellers } from '../../db/schema';
	import StarRating from './StarRating.svelte';

	export let id: string;
	export let name: string;
	export let price: string;
	export let category: string;
	export let rating: string;
	export let seller: Sellers;
</script>

<div class="flex h-40 w-full justify-between bg-white p-4">
	<div class="flex w-full gap-4">
		<div class="aspect-square h-full rounded-lg bg-zinc-300" />
		<div class="flex h-full flex-col justify-between">
			<div class="flex flex-col gap-0.5 text-sm">
				<a href="/" class="font-bold hover:underline">{name}</a>
				<p class="font-medium text-zinc-500">{category}</p>
				<StarRating rating={Number(rating)} />
			</div>
			<div class="flex w-fit gap-2 rounded-lg bg-zinc-100 p-2 text-sm font-medium">
				<h5>{seller.name}</h5>
				<p class="text-zinc-500">{seller.rating}% ({seller.ratingCount})</p>
			</div>
		</div>
	</div>
	<h4 class="text-sm font-bold">{price}€</h4>
</div>
