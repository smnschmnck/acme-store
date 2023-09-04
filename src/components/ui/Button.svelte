<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends Partial<HTMLButtonElement> {
		className?: string;
	}

	export let className = '';
</script>

<button
	class={twMerge(
		'rounded-md bg-black px-6 text-xs font-medium text-white transition hover:bg-zinc-700',
		className
	)}
	{...$$restProps}
>
	<slot />
</button>
