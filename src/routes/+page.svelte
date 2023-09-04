<script>
	import Outer from './Outer.svelte';
	let m = { x: 0, y: 0 };

	function handleMove(e) {
		m.x = e.clientX;
		m.y = e.clientY;
	}

	function handleMessage(e) {
		console.log(e.detail);
	}

	function handleClick() {
		console.log('big btn clicked');
	}
</script>

<div on:mousemove|once={handleMove}>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum accusantium odio, maiores eum,
	similique, deleniti vel animi dolorum minima illo omnis doloribus aspernatur quibusdam ipsa
	perspiciatis. Necessitatibus, qui laudantium cumque reprehenderit corrupti totam consequatur nam
	similique ducimus veniam maxime tempora culpa illum quas est doloribus placeat possimus libero
	nemo sequi, numquam molestiae provident temporibus nisi. Quaerat, neque facilis! Ad perspiciatis
	hic dicta aliquam est provident placeat qui quae cupiditate perferendis, ipsa dolorem, officiis
	deleniti aliquid minima nostrum nemo. Architecto exercitationem temporibus facere error, ex quam?
	Maxime, dolor eveniet incidunt soluta corrupti ratione quae, dolore modi consequuntur corporis
	perspiciatis ad? Laborum.
</div>

<p>The pointer is at {m.x} x {m.y}</p>

<Outer on:msg={handleMessage} on:click={handleClick} />
