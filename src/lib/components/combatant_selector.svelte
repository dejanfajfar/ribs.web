<script lang="ts">
	import type { Combatant } from '$lib/types';
    import CombatantOverview from './combatant_overview.svelte';

	export let combatants: Combatant[];
</script>

<div class="flex flex-row flex-wrap">
    {#each combatants as combatant}
        <CombatantOverview combatant = {combatant} selected = {false}></CombatantOverview>
    {/each}
</div>