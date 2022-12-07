<script>
    import { BASE_URL, username } from "../../stores/globalStore";
    let usernameValue = ""; 

    async function submitRegistration() {
        fetch($BASE_URL + "/registerMyUser", {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ username: usernameValue })
        });
        username.set(usernameValue);
    }
</script>

<input bind:value={usernameValue} placeholder="Write a username">
<button on:click={submitRegistration}>Register</button>
