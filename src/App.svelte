<script>
  import { streets } from "./stores/store";
  let fontSize = 1.8;
</script>

<main style={`--size: ${fontSize}rem`}>
  <input type="range" min="0.5" max="4" bind:value={fontSize} step="0.1" />
  <ol>
    {#each $streets as street}
      <li>
        <label
          ><input type="checkbox" name="" bind:checked={street.completed} />
          <span>{street.street}</span>
        </label>
      </li>
    {/each}
  </ol>
</main>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  main {
    padding: 0.3rem;
    margin-top: 0.5rem;
  }
  li {
    list-style-type: none;
    margin-bottom: 0.5rem;
  }
  li label {
    display: flex;
    gap: 1rem;
    font-size: var(--size, 1.8rem);
    align-items: center;
  }
  li label input {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }
</style>
