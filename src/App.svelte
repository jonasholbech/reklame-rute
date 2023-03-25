<script>
  import { streets } from "./stores/store";
  import Menu from "./lib/Menu.svelte";
  let fontSize = 1.8;
  let hideFinished = false;
  $: toShow = hideFinished ? $streets.filter((i) => !i.completed) : $streets;
</script>

<Menu>
  <p>Text størrelse</p>
  <input type="range" min="0.5" max="4" bind:value={fontSize} step="0.1" />
  <p>Skjul færdige</p>
  <input type="checkbox" bind:checked={hideFinished} />
</Menu>
<main style={`--size: ${fontSize}rem`}>
  <ol>
    {#each toShow as street}
      <li>
        <input type="checkbox" name="" bind:checked={street.completed} />
        <details>
          <summary>{street.s}</summary>
          <a href={`./paths/webp/${street.m}.webp`} target="_blank"
            ><img src={`./paths/webp/${street.m}.webp`} alt="" /></a
          >
        </details>
      </li>
    {/each}
  </ol>
</main>

<style>
  * {
    box-sizing: border-box;
  }
  main {
    padding: 0.3rem;
    margin-top: 0.5rem;
  }
  li {
    list-style-type: none;
    font-size: var(--size, 1.8rem);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1rem;
    line-height: 2rem;
  }

  li input {
    display: inline-block;
    width: calc(var(--size) + 1rem);
    height: calc(var(--size) + 1rem);
    margin-right: 0.5rem;
  }
  details summary {
    line-height: initial;
  }
</style>
