<script lang="ts">
	import type { Combatant } from '$lib/types';

	import Card from '$lib/components/combatant_card.svelte';

	const combatant: Combatant[] = [
		{
			avatar: '01_300px.jpg',
			name: 'Baton Girl',
			dmg: 2,
			hp: 20
		},
		{
			avatar: '02_300px.jpg',
			name: 'Digital Horns',
			dmg: 2,
			hp: 20
		},
		{
			avatar: '03_300px.jpg',
			name: 'Angel Eyes',
			dmg: 2,
			hp: 20
		},
		{
			avatar: '04_300px.jpg',
			name: 'Jawa',
			dmg: 2,
			hp: 20
		},
		{
			avatar: '05_300px.jpg',
			name: 'Be not afraid',
			dmg: 2,
			hp: 20
		},
		{
			avatar: '06_300px.jpg',
			name: 'Happy Ballon',
			dmg: 2,
			hp: 20
		},
		{
			avatar: '07_300px.jpg',
			name: 'Anonymous',
			dmg: 2,
			hp: 20
		},
		{
			avatar: '08_300px.jpg',
			name: 'The crown',
			dmg: 2,
			hp: 20
		},
		{
			avatar: '09_300px.jpg',
			name: 'Worm thing',
			dmg: 2,
			hp: 20
		},
		{
			avatar: '10_300px.jpg',
			name: 'Oppai',
			dmg: 2,
			hp: 20
		}
	];
</script>

<h1 class="text-3xl font-bold underline">Combatants</h1>

<div class="flex flex-row flex-wrap">
	{#each combatant as c}
		<Card combatant={c} />
	{/each}
</div>
