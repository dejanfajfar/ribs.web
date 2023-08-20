<script lang="ts">
	import * as Api from '$lib/api';

	function Validate(e: SubmitEvent) {}
</script>

<div id="BattleRequest" class="w-full my-3">
	<form
		on:submit|preventDefault={Validate}
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
				<input type="number" max="256" required id="mheight" name="mwith" />
			</div>
		</div>
		<div class="section">
			<h2>Combatants</h2>
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
