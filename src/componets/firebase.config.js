// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:'AIzaSyA50r4h9dG1tquyty4FtUs0SdulW4uuZmM' ,
  authDomain:'dragon-news-565a4.firebaseapp.com',
  projectId:'dragon-news-565a44' ,
  storageBucket:'dragon-news-565a4.appspot.com',
  messagingSenderId:'1062534304401', 
  appId: '1:1062534304401:web:2ee608633515e382102530'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;