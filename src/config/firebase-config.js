import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDhd_77F__d-tCwIniuiM628Zi-nkl5584",
  authDomain: "odop-13a5d.firebaseapp.com",
  projectId: "odop-13a5d",
  storageBucket: "odop-13a5d.appspot.com",
  messagingSenderId: "626641930349",
  appId: "1:626641930349:web:66088438d91ed82b965764",
  measurementId: "G-1KGJD1F696"
};
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

