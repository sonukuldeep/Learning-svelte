<script>
	// import { onDestroy } from 'svelte';
	import Increment from './Increment.svelte';
	import Reset from './Reset.svelte';
	import { count } from './stores';
	import { time, elapsed } from './readOnlyStore';
	import { name } from './nameStore';
	// let value = 0;

	// const unsubscribe = count.subscribe((val) => (value = val));
	// onDestroy(unsubscribe);

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<p>Current value of count is {$count}</p>
<!-- <p>Current value of count is {value}</p> -->

<Increment />

<Reset />

<p>Current time is {formatter.format($time)}</p>

<p>The page has been open for {$elapsed}</p>

<p>Name is {$name}</p>

<input type="text" bind:value={$name} />
