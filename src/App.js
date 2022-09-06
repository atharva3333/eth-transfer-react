import Transfer from './Transfer';
import './App.css';
import { useMoralis } from "react-moralis";


function App() {

  const { authenticate, isAuthenticating, logout } = useMoralis();

//   useEffect(() => {
//   if (isAuthenticated) {
//     // add your logic here
//   }
//   // eslint-disable-next-line react-hooks/exhaustive-deps
// }, [isAuthenticated]);

  const login = async () => {
   

      await authenticate({signingMessage: "Log in using Moralis" })
        
    
  }

  const logOut = async () => {
    await logout();
    console.log("logged out");
  }    
  

return (
  <div class="text-center">
        <h1 class="font-bold mt-10 text-5xl">NFT-transfer</h1>

        <button id="btn-login" class="mt-20 p-3 px-5 bg-emerald-400 text-white" onClick={login}>Metamask Login</button>
        <button id="btn-logout" class="mt-20 p-3 px-5 bg-red-400 text-white" onClick={logOut} disabled={isAuthenticating}>Logout</button>

    <br/>

       
        <Transfer/>
        <p class="mt-10">Switch to <span class="text-red-400">Goerli test network</span>  before transaction.</p>

        

    


  </div>
);
}

export default App;
