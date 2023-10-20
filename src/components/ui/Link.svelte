<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	export let href: string;
	export let className = '';
</script>

<a
	class={twMerge(
		'flex h-10 items-center justify-center rounded-lg bg-black px-6 text-sm font-medium text-white transition hover:bg-zinc-700',
		className
	)}
	{href}
>
	<slot />
</a>
