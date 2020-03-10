<template>
  <div class='mt-4'>
    <h2>Connexion</h2>
    <div class='container'>
      <form>
        <div class='form-group'>
          <label for='exampleInputEmail1'>Email address</label>
          <input
            v-model='email'
            type='email'
            class='form-control'
            id='exampleInputEmail1'
            aria-describedby='emailHelp'
          >
        </div>
        <div class='form-group'>
          <label for='exampleFormControlTextarea1'>password</label>
          <input v-model='password' type="password" class='form-control' id='exampleFormControlTextarea1' rows='3'/>
        </div>
        <button class='btn btn-primary' @click='connect($event)'>Connexion</button>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from "axios";

  export default {
    name: 'Connexion',
    data () {
      return {
        email: '',
        password: '',
        formSent: false
      }
    },
    methods: {
      connect: function (event) {
        event.preventDefault()
        console.log(this.email)
        console.log(this.password)
        axios
          .post('https://projetnodevue.herokuapp.com/login',{email:this.email,password : this.password},{headers: {'Access-Control-Allow-Origin': '*','Accept':'*'}})
          .then(response => {
            if(response.data.jwt!=null){
              this.$store.commit('loadJwt',response.data.jwt)
              this.$store.commit('loadUser',this.email)
              console.log(this.$store.state.jwt)
              this.$router.push('mesArticles')

            }

          })
          .catch(error => console.log(error))
        this.formSent = true
      }
    }
  }
</script>
