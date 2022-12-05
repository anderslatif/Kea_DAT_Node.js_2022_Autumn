<script>
    import io from "socket.io-client";

    let colorValue = "#000000";

    const socket = io("http://127.0.0.1:8080");

    socket.on("update the color", (data) => {
        // don't use document ... do it the Svelte way but...
        document.body.style.backgroundColor = data.data;
        console.log(data.username);
    });

    function sendColor() {
        socket.emit("client choose a new color", { data: colorValue });
    }
</script>

<input bind:value={colorValue} type="color">
<button on:click={sendColor}>Send color</button>