import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getIdToken} from "firebase/auth";
import { useEffect, useState } from "react";
const provider = new GoogleAuthProvider();

function App() {
  const [auth,setAuth] = useState(false);

  useEffect(()=>{
    onAuthStateChanged((userCred)=>{
      if(userCred){
        setAuth(true);
        userCred.getIdToken().then((token)=>{
          console.log(token);
        });
      }
    })
  })

  function loginWithGoogle() {
    const auth = getAuth();
    signInWithPopup(auth,provider).then((userCred) => {
      if(userCred){
        setAuth(true);
      }
      console.log(userCred);
    });
  }

  return (
    <div className="App">
      {auth ?(
      <h1>Todos</h1>

      ):(
        <button onClick={loginWithGoogle}> Login with Google </button>
      )}
    </div>
  );
}

export default App;
