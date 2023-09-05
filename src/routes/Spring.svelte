<script>
	import { spring } from 'svelte/motion';
	const coordinate = spring({ x: 50, y: 50 }, { stiffness: 0.1, damping: 1 });
	const radius = spring(20);
</script>

<svg
	on:mousedown={() => radius.set(30)}
	on:mouseup={() => radius.set(20)}
	on:mousemove={(e) => coordinate.set({ x: e.clientX, y: e.clientY })}
>
	<circle cx={$coordinate.x} cy={$coordinate.y - 100} r={$radius} />
</svg>

<style>
	svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0px;
		top: 100px;
	}

	circle {
		fill: #ff3e88;
	}
</style>
