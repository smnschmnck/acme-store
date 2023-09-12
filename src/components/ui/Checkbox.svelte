<script lang="ts">
	export let id: string;
	export let name: string;

	import checkbox from '../../assets/svg/icons/checkmark.svg';
</script>

<div class="w-fit" style="--checkmark:url({checkbox})">
	<input type="checkbox" {id} class="text-white" {name} />
	<label for={id} class="w-fit" />
</div>

<style>
	/* Hide the default checkbox */
	input[type='checkbox'] {
		position: absolute;
		opacity: 0;
		width: 0;
		height: 0;
	}

	/* Style a pseudo-element to create a custom appearance */
	input[type='checkbox'] + label::before {
		content: '';
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 4px;
		background-color: #e0e0e0;
		width: 14px; /* Adjust the size as needed */
		height: 14px; /* Adjust the size as needed */
	}

	input[type='checkbox']:focus + label::before {
		outline: #0f61ff auto 5px;
	}

	/* Style the label when the checkbox is checked */
	input[type='checkbox']:checked + label::before {
		color: white; /* Optional: set a different color for the checkmark in checked state */
		content: var(--checkmark); /* Unicode checkmark character or any other symbol you prefer */
		background-color: #0f61ff; /* Optional: set a different background color for checked state */
	}
</style>
