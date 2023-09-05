<script>
	import { fade, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	import TypewritingEffect from './TypewritingEffect.svelte';
	import GlobalTransition from './GlobalTransition.svelte';
	function spin(_, { duration }) {
		return {
			duration,
			css: (t) => {
				const eased = elasticOut(t);
				return `
				transform: scale(${eased}) rotate(${eased * 1000}deg);
				color: hsl(
					${Math.trunc(t * 360)},
					${Math.min(100, 1000 * (1 - t))}%,
					${Math.min(50, 500 * (1 - t))}%
				)
				`;
			}
		};
	}
	let fadeTransition = true;
	let flyTransition = true;
	let inOut = false;

	let customTransition = false;
</script>

<input type="checkbox" bind:checked={fadeTransition} />

{#if fadeTransition}
	<p transition:fade>Toggle to see transition</p>
{/if}

<input type="checkbox" bind:checked={flyTransition} />

{#if flyTransition}
	<p transition:fly={{ y: 200, duration: 2000 }}>Toggle to see transition</p>
{/if}

<input type="checkbox" bind:checked={inOut} />

{#if inOut}
	<p in:fade out:fly={{ y: 200, duration: 2000 }}>Toggle to see transition</p>
{/if}

<br />
<input type="checkbox" bind:checked={customTransition} />

{#if customTransition}
	<div class="centered" in:spin={{ duration: 8000 }} out:fade>
		<span>transitions!</span>
	</div>
{/if}
<br />
<TypewritingEffect />
<br />
<GlobalTransition />

<style>
	.centered {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	span {
		position: absolute;
		transform: translate(-50%, -50%);
		font-size: 4em;
	}
</style>
