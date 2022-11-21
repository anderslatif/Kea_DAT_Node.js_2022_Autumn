<script>
    import { BASE_URL } from "../../store/globals.js";
    import toastr from "toastr";

    async function fetchByEndpoint(endpoint) {
        const response = await fetch($BASE_URL + endpoint, {
            credentials: "include"
        });
        const result = await response.json();

        if (response.status === 403) {
            toastr.warning(result.message);
        } else {
            toastr.success(result.message);
        }
    }
</script>

<button on:click={() => fetchByEndpoint("/api/zookeeper/entrance")}>Go through employee entrance</button>
<button on:click={() => fetchByEndpoint("/api/zookeeper/secretroom")}>Enter Secret Room</button>
<button on:click={() => fetchByEndpoint("/api/zookeeper/exit")}>Exit through employee entrance</button>