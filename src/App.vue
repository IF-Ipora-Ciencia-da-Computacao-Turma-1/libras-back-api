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
  height: 100%;
  max-height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  margin-bottom: 5%;

  background-color: #15B6D6;
  
  flex: 1;
}
</style>
