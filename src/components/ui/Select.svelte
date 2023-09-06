<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends Partial<HTMLSelectElement> {
		className?: string;
	}

	export let className = '';
</script>

<select
	class={twMerge(
		'w-full cursor-pointer rounded-lg bg-zinc-100 text-sm font-medium outline-none hover:bg-zinc-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500',
		className
	)}
	name="category"
	id="category-select"
>
	<slot />
</select>

<style>
	/* Overwrite uggo default css */
	select {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-image: url('/icons/chevron-down.svg');
		background-position-x: calc(100% - 1rem); /* Adjust as needed */
		background-position-y: center;
		background-repeat: no-repeat;
		padding-right: 2.5rem; /* This padding adds space for the arrow */
		padding-left: 1rem;
	}
</style>
