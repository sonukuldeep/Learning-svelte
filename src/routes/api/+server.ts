import { json } from '@sveltejs/kit';
import * as database from '../lib/server/database';
export function GET() {
	const number = Math.floor(Math.random() * 6) + 1;
	return json(number);
}

export async function POST({ request, cookies }) {
	const { description } = await request.json();

	const userid = cookies.get('userid');
	const { id } = await database.createTodo({ userid, description });
	return json({ id }, { status: 201 });
}
