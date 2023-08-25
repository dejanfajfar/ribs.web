<script lang="ts">
	import { selectedCombatants } from '$lib/store';
	import * as Api from '$lib/api';
	import CombatantSelector from '$lib/components/combatant_selector.svelte';
	import type { Combatant } from '$lib/types';

	let combatants = Api.getCombatants();
	let chosen: Combatant[] = [];

	selectedCombatants.subscribe((cs) => (chosen = cs));

	async function onSubmit(e: SubmitEvent) {
		const formData = new FormData(e.target as HTMLFormElement);
		const data: any = {};
		for (let field of formData) {
			const [key, value] = field;
			data[key] = value;
		}

		let battleRequest: Api.BattleRequest = {
			map: {
				height: parseInt(data.mheight),
				width: parseInt(data.mwith)
			},
			combatants: chosen
		};

		let result = await fetch('/api/battle/', {
			method: 'POST',
			body: JSON.stringify(battleRequest)
		});
		
		const json = await result.json();
	}
</script>

<div id="BattleRequest" class="w-full my-3">
	<form
		on:submit|preventDefault={onSubmit}
		method="post"
		class="w-3/4 mx-auto p-2 border-2 shadow-md rounded-2xl bg-white"
	>
		<div class="section">
			<h2>Map</h2>
			<div class="mb-4 pl-3">
				<label for="mwith">Width</label>
				<input type="number" max="256" required id="mwith" name="mwith" />
			</div>
			<div class="mb-4 pl-3">
				<label for="mheight">Height</label>
				<input type="number" max="256" required id="mheight" name="mheight" />
			</div>
		</div>
		<div class="section">
			<h2>Combatants</h2>

			<CombatantSelector {combatants} />
		</div>
		<div>
			<button
				class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				type="submit"
			>
				Start Battle
			</button>
		</div>
	</form>
</div>

<style lang="postcss">
	.section {
		@apply mt-6;

		& h2 {
			@apply my-3 text-3xl text-center;
		}

		& label {
			@apply block text-gray-700 text-sm font-bold mb-2;
		}

		& input {
			@apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
		}
	}
</style>
