<script lang="ts">
	export let images: { src: string; alt: string }[];

	let safeImages = images.slice(0, 10);
</script>

<div class="flex max-w-fit flex-col gap-8">
	<div
		class="flex aspect-square max-h-[24rem] min-h-[24rem] min-w-[24rem] max-w-[24rem] bg-zinc-100"
	>
		<div
			class="flex snap-x snap-mandatory scroll-m-4 overflow-hidden overflow-x-auto scroll-smooth"
		>
			{#each safeImages as image, i}
				<div id={`image-${i}`} class="max-h-full min-h-full min-w-full max-w-full">
					<img class="snap-center" src={image.src} alt={image.alt} />
				</div>
			{/each}
		</div>
	</div>

	<div class="flex max-w-[24rem] flex-wrap gap-4">
		{#each safeImages as preview, i}
			<a
				href={`#image-${i}`}
				class="flex aspect-square w-16 items-center justify-center overflow-hidden bg-zinc-100 transition-all hover:scale-110"
			>
				<img src={preview.src} alt={preview.alt} />
			</a>
		{/each}
	</div>
</div>
