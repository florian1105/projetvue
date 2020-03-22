<template>

</template>

<script>
    export default {
        name: "Deconnexion",

      mounted() {
        this.$store.commit('deconnect');
        this.$router.push('/');
      }
    }
</script>

<style scoped>

</style>
