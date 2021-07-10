<script lang='ts'>

</script>

<header class='header container'>
  <h1 class='header__title'>MDocs</h1>
  <nav class='header__nav main-nav'>
    <ul class='main-nav__list'>
      <li class='main-nav__item'>
        <a class='main-nav__link' href="/">Home</a>
      </li>
      <li class='main-nav__item'>
        <a class='main-nav__link' href="/about">About</a>
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