<script lang="ts">
	export let id: string;
	export let name: string;
	export let rating: string;
	export let ratingCount: number;
</script>

<a
	href={`/seller/${id}`}
	class="flex h-fit max-w-fit gap-2 truncate rounded-lg bg-zinc-100 p-2 text-sm font-medium transition hover:bg-zinc-200 sm:justify-start"
>
	<h5 class="truncate">
		{name}
	</h5>
	<p class="text-zinc-500">
		{rating}% ({ratingCount})
	</p>
</a>
