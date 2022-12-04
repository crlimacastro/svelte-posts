import type { PageLoad } from './$types';
import type { Post, Props } from './interfaces';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('http://jsonplaceholder.typicode.com/posts');
	const posts = await res.json();

	if (res.ok) {
		return {
			props: {
				posts
			} as Props
		};
	}

	return {
		status: res.status,
		error: new Error('Could not fetch posts')
	};
};
