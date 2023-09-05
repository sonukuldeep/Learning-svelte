import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), (update) => {
	const interval = setInterval(() => {
		update(new Date());
	}, 1000);
	return () => {
		clearInterval(interval);
	};
});

const start = new Date();

export const elapsed = derived(time, ($time) => Math.round(($time - start) / 1000));
