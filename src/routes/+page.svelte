<script>
	import CompoundBinding from './CompoundBinding.svelte';

	let name;
	$: lastName = name + 'nazi';
</script>

<h1>{lastName}</h1>
<CompoundBinding bind:value={name} />
