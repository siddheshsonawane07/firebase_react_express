import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getIdToken} from "firebase/auth";
import { useEffect, useState } from "react";
import HomeScreen from "./components/login";

function App() {
  const [auth,setAuth] = useState(false || window.localStorage.getItem('auth')=== true);
  const[token, setToken] = useState('');

  useEffect(()=>{
    const auth = getAuth();
    const user = auth.currentUser;
    onAuthStateChanged(auth,(userCred)=>{
      if(userCred){
        setAuth(true);
        window.localStorage.setItem('auth','true');
        user.getIdToken().then((token)=>{
          setToken(token);
        })      
      }
    })
  })

  function loginWithGoogle() {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth,provider).then((userCred) => {
      if(userCred){
        setAuth(true);
        window.localStorage.setItem('auth','true');
      }
      console.log(userCred);
    });
  }

  return (
    <div className="App">
      {auth  ?(
        <HomeScreen token = {token}/>
      ):(
        <button onClick={loginWithGoogle}> Login with Google </button>
      )}
    </div>
  );
}

export default App;
