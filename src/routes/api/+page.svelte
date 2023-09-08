<script>
	/** @type {number} */
	let number;

	async function roll() {
		const response = await fetch('/api');
		number = await response.json();
	}
	export let data;
</script>

<h1>This is api route</h1>

<button on:click={roll}>Roll the dice</button>

{#if number !== undefined}
	<p>You rolled a {number}</p>
{/if}

<div class="centered">
	<h2>Todos again</h2>
	<label
		>Add a todo:
		<input
			type="text"
			autocomplete="off"
			on:keydown={async (e) => {
				if (e.key === 'Enter') {
					const input = e.currentTarget;
					const description = input.value;
					const response = await fetch('/api', {
						method: 'post',
						body: JSON.stringify({ description }),
						headers: {
							'Content-Type': 'application/json'
						}
					});

					const { id } = await response.json();
					data.todos = [
						...data.todos,
						{
							id,
							description
						}
					];

					input.value = '';
				}
			}}
		/>
	</label>
</div>
