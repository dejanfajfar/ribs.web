export type Combatant = {
	name: string;
	avatar: string;
	hp: number;
	dmg: number;
};

export type Map = {
	height: number;
	width: number;
};

export type Point = {
	x: number;
	y: number;
};

export type Path = {
	start: Point;
	goal: Point;
	steps: Point[];
};
