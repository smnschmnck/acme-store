<script lang="ts">
	import PlusIcon from '../../../assets/icons/PlusIcon.svelte';
	import CustomRadionButton from '../../../components/ui/CustomRadioButton.svelte';
	import StarRating from '../../../components/ui/StarRating.svelte';
	export let rating: number;
	export let selected = false;
</script>

<CustomRadionButton
	value={String(rating)}
	name="productRating"
	id={`rating_${rating}`}
	className="rounded-md"
	{selected}
>
	<div
		slot="unchecked"
		class="flex w-full cursor-pointer items-center justify-center rounded-md bg-zinc-100 py-2 hover:bg-zinc-200"
	>
		<StarRating {rating} />
		<div class="text-zinc-500">
			<PlusIcon dimensions="h-5 w-5" />
		</div>
	</div>
	<div
		slot="checked"
		class="flex w-full cursor-pointer items-center justify-center rounded-md bg-zinc-100 py-2 ring-1 ring-black hover:bg-zinc-200"
	>
		<StarRating {rating} />
		<div class="text-zinc-500">
			<PlusIcon dimensions="h-5 w-5" />
		</div>
	</div>
</CustomRadionButton>
