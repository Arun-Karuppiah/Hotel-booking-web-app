import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyA-RLFLekua04s2gwxEEKF90PsK2ECU7F8",
  authDomain: "hotel-62c83.firebaseapp.com",
  databaseURL: "https://hotel-62c83-default-rtdb.firebaseio.com",
  projectId: "hotel-62c83",
  storageBucket: "hotel-62c83.appspot.com",
  messagingSenderId: "483318743314",
  appId: "1:483318743314:web:dc60f35b596365043073cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;