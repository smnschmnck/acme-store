<script lang="ts">
	import CheckmarkIcon from '../../assets/icons/CheckmarkIcon.svelte';

	export let id: string;
	export let name: string;
	export let checked = false;
</script>

<div class="flex w-fit items-center">
	<input type="checkbox" {id} class="peer h-0 w-0 opacity-0" {name} {checked} />
	<label
		for={id}
		aria-hidden="true"
		class="flex h-[14px] w-[14px] rounded-[4px] border border-gray-300 peer-checked:hidden peer-focus:outline peer-focus:outline-blue-500"
	/>
	<label
		for={id}
		aria-hidden="true"
		class="hidden h-[14px] w-[14px] items-center justify-center rounded-[4px] bg-black peer-checked:flex peer-focus:outline peer-focus:outline-blue-500"
		><CheckmarkIcon dimensions="h-2 w-2" /></label
	>
</div>
