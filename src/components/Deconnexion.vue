<template>

</template>

<script>
    export default {
        name: "Deconnexion",

      mounted() {
        this.$store.commit('deconnect')
        this.$router.push('Articles')
      }
    }
</script>

<style scoped>

</style>
