<script lang="ts">
	import Checkbox from '../../../components/ui/Checkbox.svelte';
	export let id: string;
	export let name: string;
</script>

<div class="flex items-center gap-2 pl-4">
	<Checkbox {id} {name} />
	<label class="text-zinc-500" for={id}>
		<slot />
	</label>
</div>
