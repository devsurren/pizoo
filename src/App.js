import React from 'react';

import{ Route,Switch,BrowserRouter as Router} from 'react-router-dom';

import  Navbar  from './Components/Navbar';
import  Home   from './Home';
import Login from './Components/Login';
import SignUp  from './Components/Signup'

import { ProtectedRoute } from './ProtectedRoute';

import { useAuth,} from './Context/AuthContext'

import { Base } from './FirestoreFileUpload/BaseComp';





const App=()=>{

    const { auth  }=useAuth();

return(

 <>
   

    <Router>
            
            <Navbar />
                    <Switch>
                        <Route exact path='/' component={Base} />
                        <Route exact  path='/login' component={Login} />
                        <Route exact  path='/signup' component={SignUp} />
                        <ProtectedRoute exact path='/home' isAuth={auth}  component={ Home }  />
                    </Switch>

         </Router>
       
  </>  
 
)

}

export default App;