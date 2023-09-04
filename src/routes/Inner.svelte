<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	function handleDispatch() {
		dispatch('msg', { text: 'Hello world' });
	}
</script>

<button on:click={handleDispatch}>Click</button>
