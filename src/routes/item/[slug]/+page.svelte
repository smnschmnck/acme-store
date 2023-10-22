<script lang="ts">
	import ImageCarousel from '../../../components/ImageCarousel.svelte';
	import SellerInfo from '../../../components/ProductListing/SellerInfo.svelte';
	import Button from '../../../components/ui/Button.svelte';
	import Link from '../../../components/ui/Link.svelte';
	import LinkSecondary from '../../../components/ui/LinkSecondary.svelte';
	import Input from '../../../components/ui/Input.svelte';
	import StarRating from '../../../components/ui/StarRating.svelte';
	import type { PageData } from './$types';
	import exampleTShirt from './t-shirt-1.avif';
	import Modal from '../../../components/ui/Modal.svelte';

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
		<Modal mobileFullscreen id="shoppingCartSuccessModal">
			<div
				class="flex h-full w-full flex-col gap-6 border-zinc-200 bg-white px-20 py-16 sm:rounded-xl sm:border"
			>
				<div>
					<h1 class="text-xl font-medium">Successfully added product to cart</h1>
					<p class="text-sm text-zinc-500">{product?.name} successfully added to your cart</p>
				</div>
				<div class="flex w-full flex-col justify-center gap-4 sm:flex-row-reverse">
					<Link className="w-full" href="/shopping-cart">Go to cart</Link>
					<LinkSecondary href={product?.id ?? '/'} className="w-full">Keep shopping</LinkSecondary>
				</div>
			</div>
		</Modal>
	{/if}
	{#if product}
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
	{/if}
</div>
