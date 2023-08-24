import { writable } from 'svelte/store';
import type { Combatant } from './types';

let selectedCombatantsInitialState : Combatant[] = [];

export const selectedCombatants = writable(selectedCombatantsInitialState);