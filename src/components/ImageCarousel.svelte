<script lang="ts">
	export let images: { src: string; alt: string }[];
</script>

<div class="flex max-h-[24rem] min-h-[24rem] min-w-[24rem] max-w-[24rem] bg-zinc-100">
	<div
		class="flex h-full w-full snap-x snap-mandatory scroll-m-4 overflow-hidden overflow-x-auto scroll-smooth"
	>
		{#each images as image}
			<img class="snap-center" src={image.src} alt={image.alt} />
		{/each}
	</div>
</div>
