import Competition from '$lib/db/competition.model';
import { json } from '@sveltejs/kit';

export async function GET() {
    console.log('GET /api/competition/server.ts');
  const competitions = await Competition.findAll();
  return json(competitions);
}

export async function POST({ request }) {
  const { competition_name, competition_banner } = await request.json();
  const competition = await Competition.create({ competition_name, competition_banner });
  return json(competition, { status: 201 });
}
