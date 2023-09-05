<script>
	import { count } from './stores';

	// function increment() {
	// 	count.update((val) => val + 1);
	// }
</script>

<button on:click={count.increment}>+</button>
