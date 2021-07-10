<script lang='ts'>
  import Auth from '../components/Auth.svelte';
  import routes from '../lib/routes';
</script>

<header class='header container'>
  <h1 class='header__title'>#MDocs</h1>
  <nav class='header__nav main-nav'>
    <ul class='main-nav__list'>
      {#each routes as route}
        <li class='main-nav__item'>
          <a class='main-nav__link' href={route.url}>{route.name}</a>
        </li> 
      {/each}
      <li class='main-nav__item'>
        <Auth/>
      </li>
    </ul>
  </nav>
</header>

<style lang='scss'>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5rem;

    &__title {

    }

    &__nav {

    }
  }

  .main-nav {

    &__list {
      display: grid;
      grid-auto-flow: column;
      gap: 1rem;
      list-style: none;
    }

    &__item {

    }

    &__link {

    }
  }
</style>