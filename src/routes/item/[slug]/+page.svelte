<script lang="ts">
	import ImageCarousel from '../../../components/ImageCarousel.svelte';
	import SellerInfo from '../../../components/ProductListing/SellerInfo.svelte';
	import Button from '../../../components/ui/Button.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import StarRating from '../../../components/ui/StarRating.svelte';
	import type { PageData } from './$types';
	import exampleTShirt from './t-shirt-1.avif';
	import CartSuccessModal from './_components/CartSuccessModal.svelte';
	import ProductDescription from './_components/ProductDescription.svelte';

	export let data: PageData;
	const { product } = data;
	$: addedToCart = data.addedToCart;

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
	{#if addedToCart === 'success'}
		<CartSuccessModal productName={product?.name ?? 'Product'} />
	{/if}
	{#if product}
		<div class="flex flex-col gap-8">
			<div class="flex flex-col gap-8 md:flex-row">
				<div class="hidden md:block">
					<ImageCarousel images={exampleImages} imageIdPrefix={'imgD'} />
				</div>
				<div class="flex w-full flex-col gap-10">
					<div class="flex w-full justify-between border-b-zinc-200 text-sm md:border-b md:pb-10">
						<div class="flex flex-col gap-6">
							<div class="flex flex-col">
								<h1 class="font-bold">{product.name}</h1>
								<p class="font-medium text-zinc-500">{product.category}</p>
								<StarRating rating={Number(product.rating)} />
							</div>
							<p class="hidden text-xl font-bold md:block">{product.price}€</p>
						</div>
						<SellerInfo
							id={product.sellerId}
							name={product.seller.name}
							rating={product.seller.rating}
							ratingCount={product.seller.ratingCount}
						/>
					</div>
					<div class="block md:hidden">
						<ImageCarousel imageIdPrefix={'imgM'} images={exampleImages} />
					</div>
					<p class="block text-xl font-bold md:hidden">{product.price}€</p>
					<form method="post" class="flex w-full gap-4">
						<div class="w-48">
							<Input
								placeholder="Amount"
								name="amount"
								value="1"
								className="text-center"
								type="number"
							/>
							<input type="hidden" name="productId" value={product.id} />
						</div>
						<Button type="submit" className="w-full">Add to cart</Button>
					</form>
				</div>
			</div>
			<ProductDescription description={product.description ?? ''} />
		</div>
	{/if}
</div>
