<script>
        import { colorChangesList } from "../../stores/colorChangesList";

        
</script>

{#each $colorChangesList as colorChange}
    <div style="background-color: {colorChange.data}">
        {colorChange.username}
    </div>
{/each}

