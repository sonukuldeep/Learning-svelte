<script>
	import Red from './Red.svelte';
	import Green from './Green.svelte';
	import Blue from './Blue.svelte';

	const options = [
		{ color: 'red', component: Red },
		{ color: 'green', component: Green },
		{ color: 'blue', component: Blue }
	];
	let selected = options[0];
</script>

<select bind:value={selected}>
	{#each options as item}
		<option value={item}>{item.color}</option>
	{/each}
</select>

<svelte:component this={selected.component} />

{#each options as item}
	<svelte:component this={item.component} />
{/each}
