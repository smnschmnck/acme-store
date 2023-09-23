<script lang="ts">
	import StarFilledIcon from '../../assets/icons/StarFilledIcon.svelte';
	import StarOutlinedIcon from '../../assets/icons/StarOutlinedIcon.svelte';

	export let rating: number;

	let safeRoundedRating = Math.min(Math.round(rating), 5);
	let remainingStars = 5 - safeRoundedRating;
</script>

<div class="flex text-black">
	{#each { length: Math.min(safeRoundedRating) } as _}
		<StarFilledIcon />
	{/each}
	{#each { length: remainingStars } as _}
		<StarOutlinedIcon />
	{/each}
</div>
