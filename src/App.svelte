<script>
  import { streets } from "./stores/store";
</script>

<main>
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
  main {
    padding: 1rem;
  }
  li {
    list-style-type: none;
    margin-bottom: 0.5rem;
  }
  li label {
    display: flex;
    gap: 1rem;
    font-size: 1.8rem;
  }
  li label input {
    width: 50px;
    height: 50px;
    min-width: 50px;
  }
</style>
