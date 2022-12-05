<script>
    import { BASE_URL } from "../../stores/globalStore";
    let username = ""; 

    async function submitRegistration() {
        fetch($BASE_URL + "/registerMyUser", {
            method: "POST",
            credentials: "include",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ username })
        });
    }
</script>

<input bind:value={username} placeholder="Write a username">
<button on:click={submitRegistration}>Register</button>
