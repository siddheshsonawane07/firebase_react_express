import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
const provider = new GoogleAuthProvider();

function App() {
  const [auth,setAuth] = useState(false);

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
