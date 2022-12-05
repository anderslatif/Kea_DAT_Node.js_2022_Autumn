<script>
    import { onMount } from "svelte";
    import { BASE_URL } from "../../store/globals.js";
    let animals = [];

    async function fetchAnimals() {
        const response = await fetch(`${$BASE_URL}/api/animals`);
        // only works if it's the same origin:
        // const response = await fetch("/api/animals");
        const data = await response.json();
        animals = data.data;
    }
    onMount(fetchAnimals);
   
</script>


{#each animals as animal }
    <p>{animal}</p>
{/each}