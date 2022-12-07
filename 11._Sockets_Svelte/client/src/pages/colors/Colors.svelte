<script>
    import { colorChangesList } from "../../stores/colorChangesList";
    import io from "socket.io-client";
    import ColorChangesWidget from "../../components/ColorChangesWidget/ColorChangesWidget.svelte";

    let colorValue = "#000000";

    const socket = io();

    socket.on("update the color", (data) => {
        // don't use document ... do it the Svelte way but...
        document.body.style.backgroundColor = data.data;
        colorChangesList.update((currentColorChangesList) => {
            return [data, ...currentColorChangesList];
        });
        console.log($colorChangesList)
    });

    function sendColor() {
        socket.emit("client choose a new color", { data: colorValue });
    }
</script>

<input bind:value={colorValue} type="color">
<button on:click={sendColor}>Send color</button>

<ColorChangesWidget />