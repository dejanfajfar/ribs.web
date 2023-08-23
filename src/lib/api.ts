import type { Map, Combatant } from '$lib/types';

const apiResponseRaw =
	'{"combatants":[{"name":"test1","id":null,"hp":0,"dmg":2},{"name":"test2","id":null,"hp":0,"dmg":2},{"name":"test3","id":null,"hp":4,"dmg":2}],"map":{"width":16,"height":16,"pois":[{"location":{"x":10,"y":5},"name":"test3"},{"location":{"x":10,"y":6},"name":"test2"}]},"actions":[{"Move":{"round":1,"combatant":"test1","start":{"x":12,"y":3},"end":{"x":12,"y":6},"path":[{"x":12,"y":4},{"x":12,"y":5},{"x":12,"y":6}]}},{"Move":{"round":1,"combatant":"test2","start":{"x":10,"y":10},"end":{"x":10,"y":7},"path":[{"x":10,"y":9},{"x":10,"y":8},{"x":10,"y":7}]}},{"Move":{"round":1,"combatant":"test3","start":{"x":2,"y":2},"end":{"x":5,"y":2},"path":[{"x":3,"y":2},{"x":4,"y":2},{"x":5,"y":2}]}},{"Move":{"round":2,"combatant":"test1","start":{"x":12,"y":6},"end":{"x":10,"y":6},"path":[{"x":11,"y":6},{"x":10,"y":6}]}},{"Attack":{"round":2,"attacker":"test1","attacked":"test2","dmg":2,"remaining_hp":18}},{"Attack":{"round":2,"attacker":"test2","attacked":"test1","dmg":2,"remaining_hp":18}},{"Move":{"round":2,"combatant":"test3","start":{"x":5,"y":2},"end":{"x":7,"y":3},"path":[{"x":6,"y":2},{"x":7,"y":2},{"x":7,"y":3}]}},{"Attack":{"round":3,"attacker":"test1","attacked":"test2","dmg":2,"remaining_hp":16}},{"Attack":{"round":3,"attacker":"test2","attacked":"test1","dmg":2,"remaining_hp":16}},{"Move":{"round":3,"combatant":"test3","start":{"x":7,"y":3},"end":{"x":9,"y":4},"path":[{"x":8,"y":3},{"x":8,"y":4},{"x":9,"y":4}]}},{"Attack":{"round":4,"attacker":"test1","attacked":"test2","dmg":2,"remaining_hp":14}},{"Attack":{"round":4,"attacker":"test2","attacked":"test1","dmg":2,"remaining_hp":14}},{"Move":{"round":4,"combatant":"test3","start":{"x":9,"y":4},"end":{"x":10,"y":5},"path":[{"x":9,"y":5},{"x":10,"y":5}]}},{"Attack":{"round":4,"attacker":"test3","attacked":"test1","dmg":2,"remaining_hp":12}},{"Attack":{"round":5,"attacker":"test1","attacked":"test3","dmg":2,"remaining_hp":18}},{"Attack":{"round":5,"attacker":"test2","attacked":"test1","dmg":2,"remaining_hp":10}},{"Attack":{"round":5,"attacker":"test3","attacked":"test1","dmg":2,"remaining_hp":8}},{"Attack":{"round":6,"attacker":"test1","attacked":"test2","dmg":2,"remaining_hp":12}},{"Attack":{"round":6,"attacker":"test2","attacked":"test1","dmg":2,"remaining_hp":6}},{"Attack":{"round":6,"attacker":"test3","attacked":"test1","dmg":2,"remaining_hp":4}},{"Attack":{"round":7,"attacker":"test1","attacked":"test3","dmg":2,"remaining_hp":16}},{"Attack":{"round":7,"attacker":"test2","attacked":"test1","dmg":2,"remaining_hp":2}},{"Attack":{"round":7,"attacker":"test3","attacked":"test1","dmg":2,"remaining_hp":0}},{"Move":{"round":8,"combatant":"test2","start":{"x":10,"y":7},"end":{"x":10,"y":6},"path":[{"x":10,"y":6}]}},{"Attack":{"round":8,"attacker":"test2","attacked":"test3","dmg":2,"remaining_hp":14}},{"Attack":{"round":8,"attacker":"test3","attacked":"test2","dmg":2,"remaining_hp":10}},{"Attack":{"round":9,"attacker":"test2","attacked":"test3","dmg":2,"remaining_hp":12}},{"Attack":{"round":9,"attacker":"test3","attacked":"test2","dmg":2,"remaining_hp":8}},{"Attack":{"round":10,"attacker":"test2","attacked":"test3","dmg":2,"remaining_hp":10}},{"Attack":{"round":10,"attacker":"test3","attacked":"test2","dmg":2,"remaining_hp":6}},{"Attack":{"round":11,"attacker":"test2","attacked":"test3","dmg":2,"remaining_hp":8}},{"Attack":{"round":11,"attacker":"test3","attacked":"test2","dmg":2,"remaining_hp":4}},{"Attack":{"round":12,"attacker":"test2","attacked":"test3","dmg":2,"remaining_hp":6}},{"Attack":{"round":12,"attacker":"test3","attacked":"test2","dmg":2,"remaining_hp":2}},{"Attack":{"round":13,"attacker":"test2","attacked":"test3","dmg":2,"remaining_hp":4}},{"Attack":{"round":13,"attacker":"test3","attacked":"test2","dmg":2,"remaining_hp":0}}],"round_number":13,"winner":{"name":"test3","id":null,"hp":4,"dmg":2}}';

export interface BattleRequest {
	map: Map;
	combatants: Combatant[];
}

export interface BattleResult {}

export function startBattle(request: BattleRequest): BattleResult {
	return {};
}


export function getCombatants(): Combatant[] {
	return [
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
}