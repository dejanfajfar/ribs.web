import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

/** @type {import('./$types').Actions} */
export const actions = {
    start: async ({ request }) => {
		const formData = await request.formData();

        const data: any = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}
        console.log(data)
	}
  };