import React from 'react';

import{ Route,Switch} from 'react-router-dom';

import  Navbar  from './Components/Navbar';
import  Home   from './Home';
import Login from './Components/Login';
import SignUp  from './Components/Signup'

import { ProtectedRoute } from './ProtectedRoute';

import { useAuth } from './Context/AuthContext'

import { Base } from './FirestoreFileUpload/BaseComp';


const App=()=>{

    const { auth  }=useAuth();

return(
<>
        <Navbar />
          <Switch>
              <ProtectedRoute exact path='/home' isAuth={auth}  component={ Home }  />
              <Route exact path='/' component={Base} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
          </Switch>
</>
)

}

export default App;