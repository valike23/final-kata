import Competition from '$lib/db/competition.model';
import { ResponseHelper } from '$lib/serverHelpers/response.helper';
import { json } from '@sveltejs/kit';

export async function GET() {
    console.log('GET /api/dashboard/server.ts');
  const competitions = await Competition.count();
  const data = {competitions};
  return ResponseHelper.handleSuccess(data,json);
}

