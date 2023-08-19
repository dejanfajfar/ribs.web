<script lang="ts">
	import type { Map, Path } from '$lib/types';

	export let map: Map;
	export let path: Path;
</script>

<div>
	<table class="border-2 border-gray-500">
		{#each Array.from(Array(map.width).keys()).map((x) => x + 1) as x}
			<tr class="w-full">
				{#each Array.from(Array(map.height).keys()).map((x) => x + 1) as y}
					{#if x == path.start.x && y == path.start.y}
						<td class="w-3 h-3 bg-green-400" />
					{:else if x == path.goal.x && y == path.goal.y}
						<td class="w-3 h-3 bg-orange-400" />
					{:else if path.steps.some((p) => p.x == x && p.y == y)}
						<td class="w-3 h-3 bg-gray-800" />
					{:else}
						<td class="w-3 h-3 bg-gray-400" />
					{/if}
				{/each}
			</tr>
		{/each}
	</table>
</div>
