<script lang="ts">
	import BurgerMenuIcon from '../../assets/icons/BurgerMenuIcon.svelte';
	import CloseIcon from '../../assets/icons/CloseIcon.svelte';
	import LogoLink from '../ui/LogoLink.svelte';

	export let id: string;
</script>

<input autocomplete="off" type="checkbox" {id} class="peer absolute m-0 h-0 w-0 p-0 opacity-0" />
<label for={id} class="peer-checked:hidden">
	<BurgerMenuIcon />
</label>
<div
	class="fixed right-0 top-0 z-10 hidden h-screen w-full bg-white px-6 py-5 peer-checked:block sm:px-10 md:h-24 md:py-0 2xl:px-16"
>
	<div class="flex w-full items-center justify-between">
		<LogoLink />
		<label for={id}>
			<CloseIcon />
		</label>
	</div>
	<div class="flex flex-col pt-4 text-sm text-zinc-500">
		<a class="flex h-12 items-center border-b transition hover:text-black" href="/"
			>See order details</a
		>
		<a class="flex h-12 items-center border-b transition hover:text-black" href="/">Rate an order</a
		>
		<a class="flex h-12 items-center border-b transition hover:text-black" href="/">Wishlist</a>
	</div>
</div>
