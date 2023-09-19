<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface $$Props extends Partial<HTMLHeadingElement> {
		className?: string;
	}
	export let className = '';
</script>

<h2
	class={twMerge("w-fit font-['Poppins'] text-2xl font-bold tracking-tight", className)}
	{...$$restProps}
>
	<slot />
</h2>
