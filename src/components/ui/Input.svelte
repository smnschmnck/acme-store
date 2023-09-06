<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends Partial<HTMLInputElement> {
		className?: string;
	}

	export let className = '';
</script>

<div
	class="flex h-10 w-full items-center justify-center gap-1 rounded-lg bg-zinc-100 px-3 focus-within:outline focus-within:outline-2 focus-within:outline-blue-500"
>
	<div class="text-zinc-500">
		<slot name="icon" />
	</div>
	<input
		class={twMerge(
			'h-full w-full bg-transparent text-sm placeholder-zinc-500 outline-none placeholder:text-sm',
			className
		)}
		{...$$restProps}
	/>
</div>
