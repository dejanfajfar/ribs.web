<script lang="ts">
	import type { Combatant } from '$lib/types';
	import { createEventDispatcher } from 'svelte';

  	const dispatch = createEventDispatcher();

	function setSelectionState(){
		selected = !selected;
		if (selected) {
			dispatch('selected', combatant);
		}
		else {
			dispatch('deselected', combatant);
		}
	}

	export let combatant: Combatant;
	export let selected: boolean;
</script>

<div
	role="button"
	tabindex="0"
	class="max-w-xs overflow-hidden shadow-lg my-4 cursor-pointer {selected? 'selected' : ''}"
	on:click={setSelectionState }
	on:keypress={setSelectionState }
>
	<div>
		<img class="w-12 inline-block mx-3" src="/{combatant.avatar}" alt={combatant.name} />
		<strong class="font-bold text-xl mb-2 text-center">{combatant.name}</strong>
	</div>
	
	<div class="px-6 py-4">
		<p class="text-gray-700 text-base">
			<strong>Attack power:</strong>
			{combatant.dmg}
		</p>
		<p class="text-gray-700 text-base">
			<strong>Health points:</strong>
			{combatant.hp}
		</p>
	</div>
	<div />
</div>

<style lang="postcss">
	.selected{
		@apply border-2 border-blue-600;
	}
</style>