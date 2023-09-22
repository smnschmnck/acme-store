<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import Checkbox from '../../../components/ui/Checkbox.svelte';
	export let id: string;
	export let name: string;
	export let className = '';
	export let checked = false;
</script>

<div class={twMerge('flex items-center gap-2 pl-4 text-zinc-500', className)}>
	<Checkbox {id} {name} {checked} />
	<label class="select-none" for={id}>
		<slot />
	</label>
</div>
