<script lang="ts">
	interface $$Props extends Partial<HTMLDetailsElement> {
		className?: string;
	}

	export let className = '';
</script>

<details class={className}>
	<slot />
</details>
