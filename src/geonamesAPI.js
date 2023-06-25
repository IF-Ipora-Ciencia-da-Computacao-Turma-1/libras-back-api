import axios from "axios";

const url = 'http://www.geonames.org/childrenJSON?geonameId=';
let geo = null;

export function initialize() {
    const country = 3469034;
    let urlbr = url+country;
    axios.get(urlbr).then((res) =>{ 
        geo = res.data.geonames;
        console.log(res.data.geonames);
    });
}

export function getUF(){
    //console.log(geo);
    return geo;
}

let cidades = null;

export async function getCity(id){
    let urlcity = url+id;
    axios.get(urlcity).then((res) =>{ 
        cidades = res.data.geonames;
        //console.log('js' +res.data.geonames);
    });
}

export function getCidade(){
    return cidades;
}