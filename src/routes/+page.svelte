<script>
	import { onMount, beforeUpdate, afterUpdate } from 'svelte';
	onMount(() => {
		const canvas = document.querySelector('canvas');
		const ctx = canvas?.getContext('2d');

		ctx?.fillRect(10, 10, 100, 100);
	});
	beforeUpdate(() => {
		const div = document.querySelector('div');
		if (!div) return;
		div.textContent = 'Hello world';
	});

	afterUpdate(() => {
		const div = document.querySelector('div');
		if (!div) return;
		div.style.color = 'red';
	});
</script>

<canvas />

<div />
