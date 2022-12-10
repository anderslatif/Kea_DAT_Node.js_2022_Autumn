<script>
    import { username } from "../../stores/globalStore";

    function logout() {
        fetch("/logout");
        username.set(undefined);
    }
</script>

<button on:click={logout}>Logout</button>