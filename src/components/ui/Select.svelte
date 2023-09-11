<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import chevronDown from '../../assets/svg/icons/chevron-down.svg';

	interface $$Props extends Partial<HTMLSelectElement> {
		className?: string;
	}

	export let className = '';
</script>

<select
	style="--chevron-down: url({chevronDown});"
	class={twMerge(
		'h-10 w-full cursor-pointer overflow-clip text-ellipsis rounded-lg bg-zinc-100 text-sm font-medium hover:bg-zinc-200 focus:outline focus:outline-2 focus:outline-blue-500',
		className
	)}
	{...$$restProps}
>
	<slot />
</select>

<style>
	/* Overwrite uggo default css */
	select {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		background-image: var(--chevron-down);
		background-position-x: calc(100% - 1rem); /* Adjust as needed */
		background-position-y: center;
		background-repeat: no-repeat;
		padding-right: 2.5rem; /* This padding adds space for the arrow */
		padding-left: 1rem;
	}
</style>
