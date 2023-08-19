<script lang="ts">
	import type { Combatant } from '$lib/types';

	export let combatant: Combatant;
</script>

<div
	class="max-w-xs rounded-t-xl rounded overflow-hidden shadow-lg border-2 border-gray-600 scale-95 hover:scale-100 ease-in duration-200"
>
	<img class="w-full" src="/{combatant.avatar}" alt={combatant.name} />
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2 text-center">{combatant.name}</div>
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
