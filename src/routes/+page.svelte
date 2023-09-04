<script>
	let name = '<s>Svelte</s>';
	let src = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${name.toLowerCase()}`;
	import Nested from './Nested.svelte';
</script>

<h1>Hello, {name}</h1>
<p>Hello, {@html name}</p>

<img {src} alt="A dancing man" />

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia asperiores nobis veniam dolores</p>

<Nested />

<style>
	img {
		width: 200px;
	}
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>
