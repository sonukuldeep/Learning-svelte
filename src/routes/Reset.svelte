<script>
	import { count } from './stores';

	// function reset() {
	// 	count.set(0);
	// }
</script>

<button on:click={count.reset}>Reset</button>
