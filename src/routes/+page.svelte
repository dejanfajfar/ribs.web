<script lang="ts">
	import MapPath from '$lib/components/map_path.svelte';

	import type { Map, Path } from '$lib/types';

	const map: Map = {
		height: 16,
		width: 16
	};

	const path: Path = {
		start: { x: 12, y: 3 },
		goal: { x: 12, y: 6 },
		steps: [
			{ x: 12, y: 4 },
			{ x: 12, y: 5 },
			{ x: 12, y: 6 }
		]
	};
</script>

<h1>R.I.B.S</h1>

<a href="/combatants">Combatants</a>

<MapPath {map} {path} />
