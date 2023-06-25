<template>
  <div class="login">
    <header class="cabecalho">
            <div class="inicio">
                <nav>
                    <ul>
                        <a href=""><li class="cabecalho_itens">Cadastrar Sinais</li></a>
                        <a href=""><li class="cabecalho_itens">Listar Sinais</li></a>
                        <a href=""><li class="cabecalho_itens">Alterar Sinais</li></a>
                        <a href=""><li class="cabecalho_itens">Deletar Sinais</li></a>
                    </ul>
                </nav>
            </div>
        </header>
  </div>
</template>

<script>
export default {
  name: 'TelaOpcoes',
  data () {
    
  },
  methods: {}
  }
</script>

<style scoped>
    *, *:before, *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    nav {
        width: 100%;
    }
    ul {
        width:100%;
        max-width: 800px;
        margin: 0 auto;
        text-align:center;
        padding:0;
        text-transform: Uppercase ;
        text-decoration: none;

    }
    img {
        width:60px;
    }
    li {
        width: 20%;
        display: inline-block;
        font-size:16px;
        vertical-align:middle;
        color: black;
    }
    li:hover{
        background:white
    }
    .login {
        /*border: 5px solid;*/
        background-color: aquamarine;
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
        font-size: 30px;
    }
    p a {
        cursor: pointer;
    }
</style>
