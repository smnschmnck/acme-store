<script lang="ts">
	import chevronUp from '../../assets/svg/icons/chevron-up.svg';
	import chevronDown from '../../assets/svg/icons/chevron-down.svg';

	interface $$Props extends Partial<HTMLSpanElement> {
		className?: string;
	}

	export let className = '';
</script>

<summary
	class={className}
	style="--chevron-up:url({chevronUp}); --chevron-down:url({chevronDown});"
>
	<slot />
</summary>

<style>
	:global([open] > summary) {
		list-style-image: var(--chevron-up);
	}

	:global(details > summary) {
		list-style-image: var(--chevron-down);
	}
</style>
