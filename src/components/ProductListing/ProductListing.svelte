<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { Sellers } from '../../db/schema';
	import SellerInfo from './SellerInfo.svelte';
	import StarRating from '../ui/StarRating.svelte';
	import demoPic from './t-shirt-1.avif';

	export let id: string;
	export let name: string;
	export let price: string;
	export let rating: string;
	export let seller: Sellers;
	export let classOverrides = '';
</script>

<div
	class={twMerge(
		'flex h-48 w-full flex-col justify-between gap-2 bg-white p-4 sm:h-40 sm:flex-row',
		classOverrides
	)}
>
	<div class="flex h-full w-full gap-4">
		<div class="h-full w-fit sm:aspect-square">
			<div
				class="flex h-full w-32 items-center justify-center overflow-clip rounded-lg bg-zinc-100 sm:aspect-square sm:w-full"
			>
				<img class="scale-110" src={demoPic} alt="" />
			</div>
		</div>
		<div class="flex h-full w-full flex-col justify-between overflow-hidden lg:w-fit">
			<div class="flex flex-col gap-2">
				<div class="flex flex-col gap-0.5 text-sm">
					<a href={`/item/${id}`} class="line-clamp-2 text-ellipsis font-bold hover:underline"
						>{name}</a
					>
					<StarRating rating={Number(rating)} />
				</div>
				<h4 class="flex text-2xl font-medium">{price}€</h4>
			</div>
			<SellerInfo
				id={seller.id}
				name={seller.name}
				rating={seller.rating}
				ratingCount={seller.ratingCount}
			/>
		</div>
	</div>
</div>
