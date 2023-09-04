<script>
	let name = 'world';
	let num1 = 0;
	let numRange = 5;
	let checked = false;

	let selected;

	let scoops = 1;

	let uniform = '';
	let area;
</script>

<input type="text" bind:value={name} />
<p>Hello, {name}</p>

<input type="number" bind:value={num1} />

<p>number is {num1} and its type is {typeof num1}</p>

<input type="range" min="0" max="10" bind:value={numRange} />

<p>range is {numRange}</p>

<input type="checkbox" bind:checked />

<p>Checked {checked}</p>

<select bind:value={selected}>
	<option value="car">Car</option>
	<option value="truck">Truck</option>
	<option value="bike">Bike</option>
</select>

<p>Selected vehicle {selected}</p>

{#each [1, 2, 3] as item}
	<input type="radio" name="scoops" value={item} bind:group={scoops} />
{/each}

<p>Scoop is {scoops}</p>

<select multiple bind:value={uniform}>
	{#each ['shoe', 'shirt', 'tie', 'bag'] as item}
		<option value={item}>{item}</option>
	{/each}
</select>

<p>Multi select {uniform}</p>

<br />
<textarea bind:value={area} cols="30" rows="10" />

<p>{area}</p>
