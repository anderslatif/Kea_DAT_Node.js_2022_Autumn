<script>
    import { onMount } from "svelte";
    import { BASE_URL, username } from "./stores/globalStore";

    import Colors from "./pages/Colors/Colors.svelte";
    import Register from "./pages/Register/Register.svelte";


    onMount(async () => {
        const response = await fetch($BASE_URL + "/me");
        const { data } = await response.json();
        console.log(data)
        username.set(data);
    });
</script>

{#if $username}
    <Colors />
{:else}
    <Register />
{/if}
