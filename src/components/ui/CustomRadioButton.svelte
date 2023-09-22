<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let id: string;
	export let name: string;
	export let value: string;
	export let className = '';
	export let selected = false;
</script>

<div class="flex w-full gap-0">
	<input
		checked={selected}
		type="radio"
		class="peer m-0 h-0 w-0 appearance-none border-none p-0 opacity-0"
		{id}
		{name}
		{value}
	/>
	<label
		for={id}
		aria-hidden="true"
		class={twMerge(
			'flex w-full peer-checked:hidden peer-focus:outline peer-focus:outline-blue-500',
			className
		)}
	>
		<slot name="unchecked" />
	</label>
	<label
		for={id}
		aria-hidden="true"
		class={twMerge(
			'hidden w-full peer-checked:flex peer-focus:outline peer-focus:outline-blue-500',
			className
		)}
	>
		<slot name="checked" />
	</label>
</div>
