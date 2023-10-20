<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends Partial<HTMLButtonElement> {
		className?: string;
	}

	export let className = '';
</script>

<button
	class={twMerge(
		'flex h-10 items-center justify-center rounded-lg px-6 text-sm font-medium text-black transition hover:text-zinc-700',
		className
	)}
	{...$$restProps}
>
	<slot />
</button>
