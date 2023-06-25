import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

export function initialize(){
  const firebaseConfig = {
      apiKey: "AIzaSyBTOgmIQI3-YgpCBAp0IVzU6Vivg1GrTF8",
      authDomain: "extensaolibras-b7cdf.firebaseapp.com",
      projectId: "extensaolibras-b7cdf",
      storageBucket: "extensaolibras-b7cdf.appspot.com",
      messagingSenderId: "977616019195",
      appId: "1:977616019195:web:5a5c82a4fc10bdb1d9da5e"
  };

  firebase.initializeApp(firebaseConfig);
}

// var fileName;
// var fileIten;

// export function getFile(image, name){
//   console.log("Teste");
//   fileIten = image.target.files[0];
//   fileName = name;
// }

export function fireRef(gif){
  initialize();
  let storageRef = firebase.storage().ref("images/"+gif.name);
  let uploadTask = storageRef.put(gif);

  return uploadTask;
}


export function uploadImagem(gif){
    initialize();
    console.log(gif);
    let storageRef = firebase.storage().ref("images/"+gif.name);

  // let storageRef = firebase.storage().ref(""+fileName);
    let uploadTask = storageRef.put(gif);

  uploadTask.on("state_changed", (snapshot)=>{
    console.log(snapshot);
  }, (error)=>{
    console.log("Error = ", error);
  }, ()=>{
    uploadTask.snapshot.ref.getDownloadURL().then((url)=>{
      console.log("URL : ", url);
      return url;
    })
  })
}