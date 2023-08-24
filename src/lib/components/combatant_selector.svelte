<script lang="ts">
	import type { Combatant } from '$lib/types';
	import CombatantOverview from './combatant_overview.svelte';
	import { selectedCombatants } from '$lib/store';

	function onSelected(e: CustomEvent<any>) {
		activeCombatants.push(e.detail);
        selectedCombatants.set(activeCombatants);
	}

	function onDeselected(e: CustomEvent<any>) {
		activeCombatants = activeCombatants.filter((c) => c.name != e.detail.name);
        selectedCombatants.set(activeCombatants);
	}

	export let combatants: Combatant[];

	let activeCombatants: Combatant[] = [];
</script>

<div class="flex flex-row flex-wrap">
	{#each combatants as combatant}
		<CombatantOverview
			{combatant}
			selected={false}
			on:selected={onSelected}
			on:deselected={onDeselected}
		/>
	{/each}
</div>
