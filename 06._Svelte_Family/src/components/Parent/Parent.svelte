<script>
    export let name;
    export let children;

    import { fridgeMessageStore } from "../../store/fridgeBulletinStore";
    import Child from "../Child/Child.svelte";

    function handleEraseFridgeBulletin() {
        fridgeMessageStore.set("Write your message...");
    }

    function handleAlwaysSayHi() {
        console.log("Hi");
    }

    function handleTellILoveYou(message) {
        console.log(message);
    }

</script>

<h1>Hi I'm {name}.</h1>
<div class="erase-fridge-bulletin-div" on:click={handleEraseFridgeBulletin} on:keydown={() => {}}>Erase the fridge bulletin.</div>

{#each children as child}
    <Child child={child} parentName={name} onAlwaysSayHi={handleAlwaysSayHi} onTellILoveYou={handleTellILoveYou} />
{/each}

<style>
    .erase-fridge-bulletin-div {
        user-select: none;
    }
</style>