<script lang="ts">
  let count: number = 0;

  const handleClick = () => {
    count++;
  }

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<button on:click={handleClick}>{count}</button>

<style lang="scss">
  p {
    font-weight: bold;

    a {
      color: red;
    }
  }
</style>