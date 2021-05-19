import{ Route,Switch} from 'react-router-dom';

import { Navbar } from './Components/Navbar';
import  Login  from './Components/Login';

//const Login = React.lazy(()=>{ import('./Components/Login')  });

import  SignUp  from './Components/Signup';

//const SignUp = React.lazy(()=>import('./Components/Signup'));

import  Home   from './Home';
import { ProtectedRoute } from './ProtectedRoute';

import { useAuth } from './Context/AuthContext'

import { Base } from './FirestoreFileUpload/BaseComp';
import React from 'react';

const App=()=>{

    const { auth  }=useAuth();

return(
<>
   
        <Navbar />
        <React.Suspense fallback={<h1 className='font-bold my-10'>Loading...</h1>}>
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