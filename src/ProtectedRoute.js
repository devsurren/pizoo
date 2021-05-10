import{ Route,Redirect  } from 'react-router-dom';

export const ProtectedRoute=({
    component:Component,isAuth:isAuth,...rest
})=>{
    return(< Route 
            {...rest} render={(renderprops)=>{
                if(isAuth){
                    return <Component />
                }else{
                    return <Redirect to='/login' />
              
                }
            }}
        />)
}