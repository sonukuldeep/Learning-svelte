<script>
	import PackageInfo from './PackageInfo.svelte';
	import Thing from './Thing.svelte';

	let count = 0;
	let colours = new Set(['red', 'green', 'blue', 'yellow', 'violet', 'pink']);
	function increment() {
		count += 1;
	}

	let things = [
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	];

	function popThing() {
		things = things.slice(1);
	}

	let promised = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(1);
		}, 2000);
		setTimeout(() => {
			reject(0);
		}, 1000);
	});
</script>

<p>Modify count</p>

<button on:click={increment}>Clicked {count}</button>

{#if count > 10}
	<p>This appears once count is &gt; 10</p>
{:else if count > 5}
	<p>Current value of count is {count}</p>
{:else}
	<p>Currnet value less than 5</p>
{/if}

{#each colours as colour, index}
	<span style="background-color: {colour};padding: 5px;margin: 2px"
		>{colour} index position {index}</span
	>
{/each}

<button on:click={popThing}>Pop</button>
{#each things as item (item.id)}
	// key is very important
	<Thing name={item.name} />
{/each}

{#await promised}
	<p>loading...</p>
{:then val}
	<p>The return value is {val}</p>
{:catch error}
	<p>Error error code: {error}</p>
{/await}

<!-- {#await promised then val}
	<p>The return value is {val}</p>
{/await} -->
