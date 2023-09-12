<script lang="ts">
	export let id: string;
	export let name: string;
	export let rating: string;
	export let ratingCount: number;
</script>

<a
	href={`/seller/${id}`}
	class="m-1 flex h-fit max-w-fit flex-col truncate rounded-lg bg-zinc-100 p-2 text-sm font-medium transition hover:bg-zinc-200 sm:flex-row sm:justify-start sm:gap-2"
>
	<h5 class="truncate">
		{name}
	</h5>
	<p class="text-zinc-500">
		{rating}% ({ratingCount})
	</p>
</a>
