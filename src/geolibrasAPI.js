import axios from "axios";

const api = 'https://apiif.murillocastro.com.br/public/api/cidade/store';

export function postAPI(cidade, uf, url, lat, lon) {
    axios.post(api, {
        nome: cidade,
        estado: uf,
        sinal: url,
        latitude: lat,
        longitude: lon
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}