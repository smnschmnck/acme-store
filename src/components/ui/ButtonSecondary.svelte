<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends Partial<HTMLButtonElement> {
		className?: string;
	}

	export let className = '';
</script>

<button
	class={twMerge(
		'flex h-10 items-center justify-center rounded-lg bg-zinc-100 px-6 text-sm font-medium text-black transition hover:bg-zinc-300',
		className
	)}
	{...$$restProps}
>
	<slot />
</button>
