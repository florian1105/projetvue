<template>
  <header>
    <nav>
      <div class="nav-wrapper">
        <a href="/" class="brand-logo">Blog</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li> <router-link class='nav-item nav-link' to='/'>Articles</router-link></li>
         <li> <router-link v-if='this.$store.state.jwt!=null' class='nav-item nav-link' to='/mesArticles'>Mes Articles</router-link></li>
          <li> <router-link v-if='this.$store.state.jwt!=null' class='nav-item nav-link' to='/creationArticle'>Ajouter un article</router-link></li>
          <li><router-link v-if='this.$store.state.jwt==null' class='nav-item nav-link' to='/connexion'>Se connecter</router-link></li>
          <li><router-link v-if='this.$store.state.jwt!=null' class='nav-item nav-link' to='/deconnexion'>Se deconnecter</router-link></li>
        </ul>
      </div>

    </nav>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
