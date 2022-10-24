<script>
    export let name;
    export let children;

    import Child from "../Child/Child.svelte";

</script>

<h1>Hi I'm {name}.</h1>
{#each children as child}
    <Child child={child} />
{/each}
