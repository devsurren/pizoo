import { isElementOfType } from 'react-dom/test-utils';
import{ Route,Redirect  } from 'react-router-dom';
import { useAuth } from './Context/AuthContext';

export const ProtectedRoute=({
    component:Component,...rest
})=>{

   const { auth  }= useAuth();

   if(auth){
    localStorage.setItem("user","true");
   }

    return(< Route 
            {...rest} render={(renderprops)=>{
                if(localStorage.getItem("user")!=="true"){
                    return <Redirect to='/login' />
                   
                }
                  return <Component />
                
            }}
        />)
}