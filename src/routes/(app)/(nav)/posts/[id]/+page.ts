import { redirect } from '@sveltejs/kit';
import type { PageLoad } from '../$types';
import type { Props } from './interfaces';

interface Params {
	id: string;
}

export const load: PageLoad = async ({ fetch, params }) => {
	const { id } = params as Params;
	const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
	const post = await res.json();
	const prev = await (await fetch(`http://jsonplaceholder.typicode.com/posts/${+id - 1}`)).json();
	const next = await (await fetch(`http://jsonplaceholder.typicode.com/posts/${+id + 1}`)).json();

	if (res.ok && Object.keys(post).length > 0) {
		return {
			props: {
				post,
				prev: Object.keys(prev).length > 0,
				next: Object.keys(next).length > 0
			} as Props
		};
	}

	throw redirect(301, '/posts');
};
