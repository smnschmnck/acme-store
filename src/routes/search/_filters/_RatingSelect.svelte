<script lang="ts">
	import PlusIcon from '../../../assets/icons/PlusIcon.svelte';
	import StarRating from '../../../components/ui/StarRating.svelte';
	export let rating: number;
</script>

<div
	class="flex w-full cursor-pointer items-center justify-center rounded-md bg-zinc-100 py-2 hover:bg-zinc-200"
>
	<StarRating {rating} />
	<div class="text-zinc-500">
		<PlusIcon dimensions="h-5 w-5" />
	</div>
</div>
