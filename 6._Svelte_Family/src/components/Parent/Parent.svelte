<script>
    export let name;
    export let children;

    import Child from "../Child/Child.svelte";

    function handleAlwaysSayHi() {
        console.log("Hi");
    }

    function handleTellILoveYou(message) {
        console.log(message);
    }

</script>

<h1>Hi I'm {name}.</h1>
{#each children as child}
    <Child child={child} parentName={name} onAlwaysSayHi={handleAlwaysSayHi} onTellILoveYou={handleTellILoveYou} />
{/each}
