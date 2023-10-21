<script lang="ts">
	export let id: string;
</script>

<input type="checkbox" {id} checked class="peer hidden" />
<label
	for={id}
	class="absolute right-0 top-0 hidden h-full w-full cursor-default items-center justify-center bg-white/50 backdrop-blur-[2px] peer-checked:flex"
>
	<label for="none">
		<slot />
	</label>
</label>
