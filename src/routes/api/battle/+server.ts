import type { RequestHandler } from './$types';

import type { BattleRequest } from '$lib/api';

export const GET: RequestHandler = async () => {
    return new Response();
};

export const POST: RequestHandler = async ({request}) => {
    const requestBody : BattleRequest = await request.json();


    let result = await fetch('http://0.0.0.0:7777/battle', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(requestBody)
    });
    
    console.log(requestBody);
    const json = await result.json();

    console.log(json);
    
    return new Response();
};
