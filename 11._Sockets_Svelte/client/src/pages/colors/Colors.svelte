<script>
    import { colorChangesList } from "../../stores/colorChangesList";

    import ColorChangesWidget from "../../components/ColorChangesWidget/ColorChangesWidget.svelte";

    let colorValue = "#000000";

    import io from "socket.io-client";
    import LogOutButton from "../../components/LogOutButton/LogOutButton.svelte";
    const socket = io();

    socket.on("update the color", (data) => {
        // don't use document ... do it the Svelte way but...
        document.body.style.backgroundColor = data.data;
        colorChangesList.update((currentColorChangesList) => {
            return [data, ...currentColorChangesList];
        });
    });

    function sendColor() {
        socket.emit("client choose a new color", { data: colorValue });
    }
</script>

<LogOutButton />

<input bind:value={colorValue} type="color">
<button on:click={sendColor}>Send color</button>


<ColorChangesWidget />