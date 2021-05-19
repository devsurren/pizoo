import { useEffect } from "react";
import{ Link, useHistory  }from 'react-router-dom';
import {Formik,Form} from 'formik';

import { loginInitialValues,LoginValidationSchema  } from '../Schema/validationSchema'

import { useAuth } from "../Context/AuthContext";
import { FormField } from "./FormField";

 const Login=()=>{

     const { login,error,user,setError }=useAuth();

     const history=useHistory();

     useEffect(()=>{
         if(error) setTimeout(()=>{setError("")},5000);
         if(user) history.push('/home')
     },[user,error])


    const loginSubmitHandler=(values)=>{
        console.log('Firing Login form submit action');
        login(values.email,values.password);
    }

    return(
        <>
            <div className='login-form'>
                 {!!error&& <div className='error auth-error'>{error}</div>}
                <div className='login-form-container'>
                        <Formik
                    onSubmit={loginSubmitHandler}
                    validateOnMount={true}
                    initialValues={loginInitialValues}
                    validationSchema={LoginValidationSchema}
                >
                    {
                        ({isValid,isSubmitting})=>{
                            return(
                                <Form>
                                    <div className='login-lead'>Login</div>
                                    <div className='login-lead-msg'>Smile Please..!</div>
                                    <FormField placeholder='Email..' label='email' type='email' name='email'  />
                                    <FormField placeholder='password...' label='password' type='password' name='password'  />
                                    <button disabled={!isValid||isSubmitting}   type='submit' className='login-button' >Login</button>
                                    <p style={{textAlign:'center',marginTop:'30px',fontWeight:'bold'}}>Wanna Create Account,{<Link to='/signup'>Click</Link>} here</p>
                                </Form>
                                

                            )
                        }
                        
                    }
                </Formik>

                </div>

            </div>
        </>
    )

}     

export default Login;                                      