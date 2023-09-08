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

<div class="flex h-40 w-full flex-col justify-between gap-2 bg-white p-4 lg:flex-row">
	<div class="flex w-full gap-4 overflow-clip">
		<div class="aspect-square h-full rounded-lg bg-zinc-300" />
		<div class="flex h-full flex-col justify-between">
			<div class="flex flex-col gap-0.5 text-sm">
				<a href={`/item/${id}`} class="line-clamp-1 w-full overflow-clip font-bold hover:underline"
					>{name}</a
				>
				<p class="font-medium text-zinc-500">{category}</p>
				<StarRating rating={Number(rating)} />
			</div>
			<a
				href={`/seller/${seller.id}`}
				class="flex w-fit gap-2 rounded-lg bg-zinc-100 p-2 text-sm font-medium transition hover:bg-zinc-200"
			>
				<h5 class="max-h-5 max-w-[8rem] overflow-hidden text-ellipsis whitespace-nowrap">
					{seller.name}
				</h5>
				<p class="text-zinc-500">{seller.rating}% ({seller.ratingCount})</p>
			</a>
		</div>
	</div>
	<h4 class="text-sm font-bold">{price}€</h4>
</div>
