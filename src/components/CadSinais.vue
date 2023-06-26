<template>
  <div class="login">
    <h1>Cadastro de Sinais</h1>


    <div class="CidadeEstado">
      <div class="estadoInput">
        <label for="">Estado</label>
        <select class="InputEstado" v-model="inputEstado">
          <option disabled value="--">--</option>
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
      </div>

      <div class="cidadeInput">
        <label>Cidade</label>
        <input
          type="text"
          accept="text"
          v-model="inputCidade"
          class="InputFile" 
        />
      </div>
    </div>

    <div class="fileInput">
      <label for="">Sinal</label>
      <input
        type="file"
        class="InputFile"
        id="InputFile"
        @change="getFile($event)"
        accept="image/gif"
      />
    </div>

    <div class="buttonsContainer">
      <div>
        <button @click="cad">Cadastrar</button>
      </div>

      <div>
        <button @click="view">Visualizar</button>
        
      </div>
      
    </div>

    <div class="cards">
          <!-- <h1 v-for="iten in data" :key="iten.id">{{ iten }}</h1> -->
          <div class="card" v-for="iten in data" :key="iten.id">
            <h1>{{ iten.nome }}</h1>
            <img :src="iten.sinal" alt="imagem" class="urlimg" />
            <svg
              @click="delet(iten.id)"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash svgtrash"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"
              />
              <path
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"
              />
            </svg>
          </div>

        </div>
  </div>
</template>

<script>
import * as firebase from "../firebase.js";
import * as geoName from "../geonamesAPI.js";
import * as geolibras from "../geolibrasAPI.js";
import axios from "axios";

export default {
  name: "TelaLogin",
  data() {
    return {
      gif: null,
      link: null,
      estado: null,
      cidade: null,
      lat: null,
      lon: null,
      data: [],
    };
  },
  methods: {
    cad() {
      firebase.initialize();

      this.cidade = this.inputCidade;
      this.estado = this.inputEstado;

      let dataUF = geoName.getUF();
      //console.log(data);
      dataUF.forEach((element) => {
        //console.log(element.adminCodes1.ISO3166_2);
        if (this.estado == element.adminCodes1.ISO3166_2) {
          console.log(element.adminCodes1.ISO3166_2);
          let UF = element.geonameId;
          geoName.getCity(UF);
        }
      });

      let uptask = firebase.fireRef(this.gif);
      uptask.on(
        "state_changed",
        (snapshot) => {
          console.log(snapshot);
        },
        (error) => {
          console.log("Error = ", error);
        },
        () => {
          uptask.snapshot.ref.getDownloadURL().then((url) => {
            console.log("URL : ", url);
            this.link = url;
            let dataCidade = geoName.getCidade();
            dataCidade.forEach((element) => {
              if (this.cidade == element.toponyName) {
                this.lat = element.lat;
                this.lon = element.lng;
                console.log(this.lat + "/" + this.lon);

                geolibras.postAPI(
                  this.cidade,
                  this.estado,
                  this.link,
                  this.lat,
                  this.lon
                );
              }
            });
          });
        }
      );
    },
    getFile(e) {
      var fileIten = e.target.files[0];
      var fileName = fileIten.name;
      console.log(fileName);
      console.log(fileIten);
      this.gif = fileIten;
    },
    uploadImagem() {
      firebase.uploadImagem(this.gif);
    },
    view() {
      let url = "https://apiif.murillocastro.com.br/public/api/cidade/index";
      axios
        .get(url)
        .then((resposta) => {
          this.data = resposta.data;
          console.log(this.data);
        })
        .catch((erro) => {
          console.log(erro);
        });
    },
    delet(idd) {
      let url = "https://apiif.murillocastro.com.br/public/api/cidade/delete";
      axios
        .post(url, {
          id: idd,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  created() {
    firebase.initialize();
    geoName.initialize();
  },
};
</script>

<style scoped>
.login {
  background-color: #ffffff;
  width: fit-content;
  height: fit-content;
  max-width: 900px;


  border-radius: 20px;

  padding: 50px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.login > h1 {
  font-size: 40px;
  padding: 20px;
}

label {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fileInput {
  margin-top: 20px;
  max-width: 300px;
}
.InputFile {
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #15b6d6;
  border-radius: 10px;
}

.InputEstado {
  width: 70px;
  height: 50px;
  border: 1px solid #15b6d6;
  border-radius: 10px;
}

.CidadeEstado {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.buttonsContainer{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  padding-top: 40px;
  box-sizing: border-box;
}

button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;

  background: #FFC831;

  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
}

p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}


.cards{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  
  margin: 10px;
  border: 2px solid #15B6D6;
  padding: 10px;
    
  border-radius: 10px;

}

.card h1{
  flex: 1;
  font-size: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
}
.urlimg {
  max-width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;

}
.svgtrash {
  width: 30px;
  height: 30px;
  margin-top: 5px;
  margin-bottom: 5px;
}
.cadastrar{
  background: #fff;
}
</style>
