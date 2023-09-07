<script lang="ts">
	import StarFilled from '../../assets/icons/StarFilled.svelte';
	import StarOutlined from '../../assets/icons/StarOutlined.svelte';

	export let rating: number;

	const stars: boolean[] = Array(5).fill(false);

	for (let i = 0; i < Math.round(rating); i++) {
		if (i >= 5) break;

		stars[i] = true;
	}
</script>

<div class="flex">
	{#each stars as filled}
		{#if filled}
			<StarFilled />
		{/if}
		{#if !filled}
			<StarOutlined />
		{/if}
	{/each}
</div>
