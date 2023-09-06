<script>
	import StarFilled from '../assets/icons/StarFilled.svelte';
	import StarOutlined from '../assets/icons/StarOutlined.svelte';
</script>

<div class="flex h-40 w-full justify-between bg-white p-4">
	<div class="flex w-full gap-4">
		<div class="aspect-square h-full rounded-lg bg-zinc-300" />
		<div class="flex h-full flex-col justify-between">
			<div class="flex flex-col gap-0.5 text-sm">
				<a href="/" class="font-bold hover:underline">A pretty super long product name</a>
				<p class="font-medium text-zinc-500">Category</p>
				<div class="flex">
					<StarFilled />
					<StarFilled />
					<StarFilled />
					<StarFilled />
					<StarOutlined />
				</div>
			</div>
			<div class="flex w-fit gap-2 rounded-lg bg-zinc-100 p-2 text-sm font-medium">
				<h5>edward2</h5>
				<p class="text-zinc-500">99.6% (83)</p>
			</div>
		</div>
	</div>
	<h4 class="text-sm font-bold">19.99€</h4>
</div>
