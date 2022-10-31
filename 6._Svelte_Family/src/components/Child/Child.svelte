<script>
    export let child;
    export let parentName;
    export let onAlwaysSayHi;
    export let onTellILoveYou;

    import { fridgeMessageStore } from "../../store/fridgeBulletinStore";
    let fridgeMessage = "";

    function handleWriteMessage() {
        fridgeMessageStore.update((currentMessage) => {
            return currentMessage + `${fridgeMessage}`; 
        });
    }
</script>

<p>{child.name}</p>

<input placeholder="Write a message" bind:value={fridgeMessage}>
<button on:click={handleWriteMessage}>Write a message</button>
<br><br>

<button on:click={onAlwaysSayHi}>Greet</button>
<button on:click={onTellILoveYou(`I love you, ${parentName}.`)}>Whisper in parents ear</button>