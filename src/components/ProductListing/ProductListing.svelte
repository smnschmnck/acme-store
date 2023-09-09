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

<div class="flex h-40 w-full justify-between gap-2 bg-white p-4">
	<div class="flex w-full gap-4">
		<div class="aspect-square h-full rounded-lg bg-zinc-300" />
		<div class="flex h-full w-full flex-col justify-between overflow-hidden lg:w-fit">
			<div class="flex flex-col gap-0.5 text-sm">
				<a href={`/item/${id}`} class="line-clamp-2 text-ellipsis font-bold hover:underline"
					>{name}</a
				>
				<StarRating rating={Number(rating)} />
			</div>
			<h4 class="block text-sm font-bold lg:flex">{price}€</h4>
			<a
				href={`/seller/${seller.id}`}
				class="flex max-w-fit gap-2 truncate rounded-lg bg-zinc-100 p-2 text-sm font-medium transition hover:bg-zinc-200"
			>
				<h5 class="truncate">
					{seller.name}
				</h5>
				<p class="text-zinc-500">
					{seller.rating}% ({seller.ratingCount})
				</p>
			</a>
		</div>
	</div>
	<h4 class="hidden text-sm font-bold lg:block">{price}€</h4>
</div>
