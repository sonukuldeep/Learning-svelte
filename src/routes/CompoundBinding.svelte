<script>
	export let value = '';
</script>

<label>
	Enter Name:
	<input type="text" bind:value />
</label>

<p>You passed me <span>{value}</span> name</p>

<style>
	span {
		color: violet;
	}
</style>
