<script lang='ts'>
  import Header from '../layout/Header.svelte';
  import Footer from '../layout/Footer.svelte';
</script>

<svelte:head>
  <title>MDocs</title>
</svelte:head>

<Header/>
<slot></slot>
<Footer/>

<style lang='scss' global>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;800&display=swap');

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  #svelte {
    display: grid;
    grid-template-rows: max-content auto max-content;
    min-height: 100vh;
  }

  .container {
    max-width: 100%;
    width: 100%;
    margin: 0 auto;

    @media (min-width: 576px) {
      max-width: 540px;
    }

    @media (min-width: 768px) {
      max-width: 720px;
    }

    @media (min-width: 992px) {
      max-width: 960px;
    }

    @media (min-width: 1200px) {
      max-width: 1140px;
    }

    @media (min-width: 1400px) {
      max-width: 1320px;
    }
  }
</style>