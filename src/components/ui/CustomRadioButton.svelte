<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	export let id: string;
	export let name: string;
	export let value: string;
	export let className = '';
</script>

<div class="flex w-full">
	<input type="radio" class="peer h-0 w-0 opacity-0 outline-none" {id} {name} {value} />
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
