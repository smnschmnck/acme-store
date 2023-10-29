<script lang="ts">
	import ButtonSecondary from '../../../../components/ui/ButtonSecondary.svelte';
	import Link from '../../../../components/ui/Link.svelte';
	import Modal from '../../../../components/ui/Modal.svelte';

	export let productName: string;
</script>

<Modal>
	<div class="flex h-full w-full items-center justify-center">
		<div
			class="flex h-full w-full flex-col gap-6 border-zinc-200 bg-white px-20 py-16 sm:h-fit sm:w-fit sm:rounded-xl sm:border"
		>
			<div>
				<h1 class="text-xl font-medium">Successfully added product to cart</h1>
				<p class="text-sm text-zinc-500">{productName} successfully added to your cart</p>
			</div>
			<div class="flex w-full flex-col justify-center gap-4 sm:flex-row-reverse">
				<Link className="w-full" href="/shopping-cart">Go to cart</Link>
				<form method="dialog" class="w-full">
					<ButtonSecondary className="w-full">Keep shopping</ButtonSecondary>
				</form>
			</div>
		</div>
	</div>
</Modal>
