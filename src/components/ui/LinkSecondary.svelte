<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let className = '';
	export let href: string;
</script>

<a
	class={twMerge(
		'flex h-10 items-center justify-center rounded-lg bg-zinc-100 px-6 text-sm font-medium text-black transition hover:bg-zinc-300',
		className
	)}
	{href}
>
	<slot />
</a>
