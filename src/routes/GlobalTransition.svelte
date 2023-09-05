<script>
	import { fade } from 'svelte/transition';

	let showItems = true;
	let i = 5;
	let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
</script>

<label>
	<input type="checkbox" bind:checked={showItems} />
	show list
</label>
<br />
<label>
	<input type="range" bind:value={i} max="10" />
</label>

{#if showItems}
	{#each items.slice(0, i) as item}
		<div transition:fade|global>
			{item}
		</div>
	{/each}
{/if}

<style>
	div {
		padding: 0.5em 0;
		border-top: 1px solid #eee;
	}
</style>
