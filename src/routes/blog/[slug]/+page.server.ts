import { posts } from '../data';
import { error } from '@sveltejs/kit';
export const load = ({ params }) => {
	const post = posts.find((post) => post.slug === params.slug);
	if (!post) throw error;
	return { post };
};
