<script>
	export let data;
</script>

<h1>This is blog root</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li>
			<a href="/blog/{slug}">{title}</a>
		</li>
	{/each}
</ul>

<style>
	li {
		list-style: none;
	}
</style>
