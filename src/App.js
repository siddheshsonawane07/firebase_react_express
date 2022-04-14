import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getIdToken} from "firebase/auth";
import { useEffect, useState } from "react";

function App() {
  const [auth,setAuth] = useState(false);
  const[token, setToken] = useState('');

  useEffect(()=>{
    const auth = getAuth();
    const user = auth.currentUser;
    onAuthStateChanged(auth,(userCred)=>{
      if(userCred){
        setAuth(true);
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
      }
      console.log(userCred);
    });
  }

  return (
    <div className="App">
      {auth  ?(
      <h1>Todos</h1>

      ):(
        <button onClick={loginWithGoogle}> Login with Google </button>
      )}
    </div>
  );
}

export default App;
