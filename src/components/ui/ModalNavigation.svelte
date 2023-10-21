<script lang="ts">
	export let href = '/';
</script>

<a
	{href}
	class="absolute right-0 top-0 flex h-full w-full cursor-default items-center justify-center bg-white/50 backdrop-blur-[2px]"
>
	<div class="pointer-events-none">
		<slot />
	</div>
</a>
