<script lang="ts">
	import ImageCarousel from '../../../components/ImageCarousel.svelte';
	import SellerInfo from '../../../components/ProductListing/SellerInfo.svelte';
	import Button from '../../../components/ui/Button.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import StarRating from '../../../components/ui/StarRating.svelte';
	import type { PageData } from './$types';

	import exampleTShirt from './t-shirt-1.avif';

	export let data: PageData;
	const { product } = data;

	const exampleImages = [
		{ src: exampleTShirt, alt: 't-shirt' },
		{ src: exampleTShirt, alt: 't-shirt' },
		{ src: exampleTShirt, alt: 't-shirt' },
		{ src: exampleTShirt, alt: 't-shirt' },
		{ src: exampleTShirt, alt: 't-shirt' },
		{ src: exampleTShirt, alt: 't-shirt' },
		{ src: exampleTShirt, alt: 't-shirt' }
	];
</script>

<div class="py-10">
	{#if product}
		<div class="flex flex-col gap-8 md:flex-row">
			<ImageCarousel images={exampleImages} />
			<div class="flex w-full flex-col gap-10">
				<div class="flex w-full justify-between border-b border-b-zinc-200 pb-10 text-sm">
					<div class="flex flex-col gap-6">
						<div class="flex flex-col">
							<h1 class="font-bold">{product.name}</h1>
							<p class="font-medium text-zinc-500">{product.category}</p>
							<StarRating rating={Number(product.rating)} />
						</div>
						<p class="text-xl font-bold">{product.price}€</p>
					</div>
					<SellerInfo
						id={product.sellerId}
						name={product.seller.name}
						rating={product.seller.rating}
						ratingCount={product.seller.ratingCount}
					/>
				</div>
				<div class="flex w-full gap-4">
					<div class="w-48">
						<Input placeholder="Amount" value="1" className="text-center" type="number" />
					</div>
					<Button className="w-full">Add to cart</Button>
				</div>
			</div>
		</div>
	{/if}
</div>
