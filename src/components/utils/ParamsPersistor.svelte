<script lang="ts">
	export let paramsToPersist: string[];
	export let allParams: URLSearchParams;
</script>

{#each paramsToPersist as param}
	{#if allParams.get(param)}
		<input type="hidden" name={param} value={allParams.get(param)} />
	{/if}
{/each}
