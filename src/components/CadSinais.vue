<template>
  <div class="login">
    <h1>Cadastro de Sinais</h1>
    <label for="">Sinal</label>
    <input type="file" class="InputFile" id="InputFile" @change="getFile($event)"  accept="image/gif"><br>
    <label for="">Estado</label>
    <select v-model="inputEstado">
      <option disabled value=""></option>
      <option>AC</option>
      <option>AL</option>
      <option>AP</option>
      <option>AM</option>
      <option>BA</option>
      <option>CE</option>
      <option>DF</option>
      <option>ES</option>
      <option>GO</option>
      <option>MA</option>
      <option>MT</option>
      <option>MS</option>
      <option>MG</option>
      <option>PA</option>
      <option>PB</option>
      <option>PR</option>
      <option>PE</option>
      <option>PI</option>
      <option>RR</option>
      <option>RO</option>
      <option>RJ</option>
      <option>RN</option>
      <option>RS</option>
      <option>SC</option>
      <option>SP</option>
      <option>SE</option>
      <option>TO</option>
    </select>
    <label>Cidade</label><input type="text" accept="text" v-model="inputCidade">
    <br>
    <br>
    <br>
    <div>
      <button @click="cad">Cadastrar</button>
    </div>

  </div>
  <button @click="uploadImagem">Subir</button>
    <button @click="list">Listar</button>
    <button >Apagar</button>

    <br>

    <div class="btn-cad">
      <button @click="cad">Cadastrar</button>
    </div>
</template>

<script>
import * as firebase from '../firebase.js';
import * as geoName from '../geonamesAPI.js';

export default {
  name: 'TelaLogin',
  data () {
    return{
      gif : null,
      link: null,
      estado : null,
      cidade : null,
      lat : null,
      lon : null,
    }
  },
  methods:{
    cad(){
      firebase.initialize();
      
      this.cidade = this.inputCidade;
      this.estado = this.inputEstado;
      
      let dataUF = geoName.getUF();
      //console.log(data);
      dataUF.forEach(element => {
        //console.log(element.adminCodes1.ISO3166_2);
        if(this.estado == element.adminCodes1.ISO3166_2){
          console.log(element.adminCodes1.ISO3166_2);
          //console.log(element.countryId);
          let UF = element.countryId;
          //let dataCidade = geoName.getCity(UF);
          //console.log('vue'+dataCidade);
          let citytask = geoName.getCity(UF);
          citytask.on("state_changed", (snapshot)=>{
            console.log(snapshot);
          }, (error)=>{
            console.log("Error = ", error);
          }, ()=>{
            console.log(citytask.snapshot);
          // uptask.snapshot.ref.getDownloadURL().then((url)=>{
          //   console.log("URL : ", url);
          //   this.link = url;
          // })
        })
        }
      });

      let uptask = firebase.fireRef(this.gif);
      uptask.on("state_changed", (snapshot)=>{
        console.log(snapshot);
      }, (error)=>{
        console.log("Error = ", error);
      }, ()=>{
        uptask.snapshot.ref.getDownloadURL().then((url)=>{
          console.log("URL : ", url);
          this.link = url;
        })
      })
    },
    getFile(e){
      var fileIten = e.target.files[0];
      var fileName = fileIten.name;
      console.log(fileName);
      console.log(fileIten);
      this.gif = fileIten;
    }, 
    uploadImagem(){
      firebase.uploadImagem(this.gif);
    },
  },
  created(){
    firebase.initialize();
    geoName.initialize();
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
