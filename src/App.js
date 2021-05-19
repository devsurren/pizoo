import React from 'react';

import{ Route,Switch} from 'react-router-dom';

import { Navbar } from './Components/Navbar';

import  Home   from './Home';
import { ProtectedRoute } from './ProtectedRoute';

import { useAuth } from './Context/AuthContext'

import { Base } from './FirestoreFileUpload/BaseComp';


const Login = React.lazy(()=> (import('./Components/Login')));
const SignUp = React.lazy(()=>(import('./Components/Signup')));

const App=()=>{

    const { auth  }=useAuth();

return(
<>
   
        <Navbar />
        <React.Suspense fallback={<h1 style={{marginTop:40,textAlign:'center'}}>Loading...</h1>}>
          <Switch>
              <ProtectedRoute exact path='/home' isAuth={auth}  component={ Home }  />
              <Route exact path='/' component={Base} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={SignUp} />
          </Switch>
        </React.Suspense>
       
   


</>
)

}

export default App;