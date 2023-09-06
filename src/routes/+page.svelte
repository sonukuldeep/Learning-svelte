<script>
	let user = {
		fname: 'Ada',
		lname: 'zarial'
	};
</script>

<label
	>First name
	<input type="text" bind:value={user.fname} />
</label>
<label
	>Lastname
	<input type="text" bind:value={user.lname} />
</label>

{@debug user}

<h2>Hello from {user.fname}</h2>
