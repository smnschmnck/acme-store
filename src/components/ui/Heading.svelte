<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	interface $$Props extends Partial<HTMLHeadingElement> {
		className?: string;
	}
	export let className: string = '';
</script>

<h2 class={twMerge("w-fit font-['Poppins'] text-3xl font-bold", className)} {...$$restProps}>
	<slot />
</h2>
