<script lang="ts">
	export let images: { src: string; alt: string }[];

	let safeImages = images.slice(0, 10);
	export let imageIdPrefix: string;
</script>

<div class="flex max-w-fit flex-col gap-4">
	<div
		class="flex aspect-square min-w-full max-w-full bg-zinc-100 lg:max-h-[24rem] lg:min-h-[24rem] lg:min-w-[24rem] lg:max-w-[24rem]"
	>
		<div
			class="flex snap-x snap-mandatory scroll-m-4 overflow-hidden overflow-x-auto scroll-smooth"
		>
			{#each safeImages as image, i}
				<div id={`${imageIdPrefix}-${i}`} class="max-h-full min-h-full min-w-full max-w-full">
					<img class="snap-center" src={image.src} alt={image.alt} />
				</div>
			{/each}
		</div>
	</div>

	<div class="flex flex-wrap gap-2 lg:max-w-[24rem] lg:gap-4">
		{#each safeImages as preview, i}
			<a
				href={`#${imageIdPrefix}-${i}`}
				class="flex aspect-square w-16 items-center justify-center overflow-hidden bg-zinc-100 transition-all hover:scale-110"
			>
				<img src={preview.src} alt={preview.alt} />
			</a>
		{/each}
	</div>
</div>
