<script>
    import { onMount } from "svelte";
    import { BASE_URL, ENVIRONMENT, username  } from "./stores/globalStore";

    import { Router, Link, Route } from "svelte-navigator";

    import io from "socket.io-client";

    import Colors from "./pages/Colors/Colors.svelte";
    import Register from "./pages/Register/Register.svelte";

    const socket = io();

    onMount(async () => {
        if ($ENVIRONMENT === "DEVELOPMENT") {
            socket.on("update the page", () => {
                location.reload();
            });
        }
 
        const response = await fetch($BASE_URL + "/me");
        const { data } = await response.json();
        username.set(data);
    });
</script>

<Router>
    <nav>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
    </nav>
    <div>
        <Route path="/">
            {#if $username}
                <Colors />
            {:else}
                <Register />
            {/if}
        </Route>
        <Route path="about">
            <h1>About</h1>
        </Route>
    </div>
</Router>

