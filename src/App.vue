<template>
  <div id="app">
    <Header/>
    <router-view/>
    <footer>
      <Footer/>
    </footer>
  </div>
</template>

<script>
  import Header from './components/layouts/Header'
  import Footer from './components/layouts/Footer'

  export default {
    name: 'App',
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
