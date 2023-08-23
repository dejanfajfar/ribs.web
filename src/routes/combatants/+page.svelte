<script lang="ts">
	import type { Combatant } from '$lib/types';
	import { getCombatants } from '$lib/api';

	import Card from '$lib/components/combatant_card.svelte';

	const combatant: Combatant[] = getCombatants();
</script>

<h1 class="text-3xl font-bold underline">Combatants</h1>

<div class="flex flex-row flex-wrap">
	{#each combatant as c}
		<Card combatant={c} />
	{/each}
</div>
