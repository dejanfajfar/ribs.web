<script lang="ts">
    import type { Combatant } from '$lib/types'

    const combatant : Combatant = {
        avatar: "03_300px.jpg",
        name: "Angel Eyes",
        dmg: 2,
        hp: 20
    } 
</script>

<h1>Combatants</h1>

<p>{combatant.name}</p>
<img src="/{combatant.avatar}" alt="{combatant.name}"/>