<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import Spring from './Spring.svelte';

	const progress = tweened(0, { easing: cubicOut, duration: 400 });
</script>

<progress value={$progress} />
<br />
<button on:click={() => progress.set(0)}>0%</button>
<button on:click={() => progress.set(0.25)}>25%</button>
<button on:click={() => progress.set(0.5)}>50%</button>
<button on:click={() => progress.set(0.75)}>75%</button>
<button on:click={() => progress.set(1)}>100%</button>

<Spring />

<style>
	progress {
		width: 600px;
	}
</style>
