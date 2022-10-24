<script>
  import Parent from "./components/Parent/Parent.svelte";
  import Home from "./components/Home/Home.svelte";

  const parents = ["Kurt", "Katja"];
  const children = [
    {
      name: "Flemming",
      blackSheep: true
    },
    {
      name: "Erik",
      brightKid: true
    },
    {
      name: "Ingrid",
      isGirl: true,
      brightKid: true
    },
  ];
  const pets = [
    { type: "Panda", "name": "Poh" },
    { type: "Dinosaur", "name": "Little Foot" }
  ];

</script>

<main>
    <Home>
      <Parent name={parents[0]} children={children}/>
      <Parent name={parents[1]} children={children} />
    </Home>
</main>

<style>
</style>
