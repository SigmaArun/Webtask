import React, { useContext} from 'react';

import Login from '../../01-starting-project/src/components/Login/Login';
import Home from '../../01-starting-project/src/components/Home/Home';
import MainHeader from '../../01-starting-project/src/components/MainHeader/MainHeader'; 
import AuthContext from '../../01-starting-project/src/store/auth-context';


function App() {
  

 const ctx= useContext(AuthContext);
 

  return (
  
      <React.Fragment>
      <MainHeader/>
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home/>}
      </main>
      </React.Fragment>
    
  );
}

export default App;
