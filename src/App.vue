<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <TelaLogin/>
  <TelaOpcoes/>-->
  <CadSinais/>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import TelaLogin from './components/TelaLogin.vue'
//import TelaOpcoes from './components/TelaOpcoes.vue'
import CadSinais from './components/CadSinais.vue'

export default {
  name: 'App',
  components: {
    //TelaLogin,
    //TelaOpcoes,
    CadSinais
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  

  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #15B6D6;
 
}
</style>
