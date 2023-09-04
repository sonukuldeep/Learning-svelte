<script>
	let count = 0;

	let obj = [0, 1, 2];
	// let objInMap = new Set();

	function modufyObject() {
		// obj.push('d'); // this will not work
		// obj = obj; // unless we assign it
		obj = [...obj, obj.length]; // how its done

		// objInMap.add(0); //this wont even work even with assignment
		// objInMap = objInMap;
	}

	function increment() {
		// reactivie assignment
		count += 1;
	}

	// reactive declarations.
	$: doubled = count * 2;

	// reactive statements.
	$: if (count !== 0) {
		console.log('Count is ' + count);
		console.log('Double of count ' + doubled);
	}
</script>

<p>Reactivity</p>

<p>Doubled value of count is {doubled}</p>

<button on:click={increment}>Clicked {count}</button>

<p>{JSON.stringify(obj)}</p>
<button on:click={modufyObject}>Modify obj</button>
