<template>
  <div class="login">
    <h1>Login</h1>
    <input
      type="text"
      placeholder="Email"
      v-model="email"
    >
    <br>
    <input
      type="password"
      placeholder="Senha"
      v-model="senha"
    >
    <br>
    <div class="btn-login">
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TelaLogin',
  data () {
    
  },
  methods: {
    login(){
        window.open('./components/TelaOpcoes.vue');
    }
  }
  }
</script>

<style scoped>
.login {
  border: 10px solid;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
</style>
