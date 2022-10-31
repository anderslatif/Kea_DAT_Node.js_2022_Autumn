<script>
    export let child;
    export let parentName;
    export let onAlwaysSayHi;
    export let onTellILoveYou;
</script>

<p>{child.name}</p>
<button on:click={onAlwaysSayHi}>Greet</button>
<button on:click={onTellILoveYou(`I love you, ${parentName}.`)}>Whisper in parents ear</button>