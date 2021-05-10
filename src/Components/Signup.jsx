import { useEffect} from "react";
import { useHistory,Link } from "react-router-dom";
import {Formik,Form} from 'formik';

import{ signUpValidationSchema,signUpInitialValues  } from '../Schema/validationSchema';

import { FormField } from "./FormField";

import { useAuth } from "../Context/AuthContext";

import { firebaseFireStore } from "../config/config";

export const SignUp=()=>{

    const { signUp,user,error,setError }=useAuth();

    const history=useHistory();

    useEffect(()=>{
        if(error) setTimeout(()=>{setError("")},5000)
        if(user){
             history.push('/home')
             createFireStore(user.uid)
         }
    },[user,error])


    const createFireStore=(id)=>{
        //  const imageDetails={
        //      id:"",
        //      url:"",
        //      createdAt:""
        //  }
        if(id){
            console.log(`inside CreateFireStore ${id} `);
            firebaseFireStore.collection('images').doc(id).set({
                imagecollections:[]
            }).then(()=>{console.log(`DataBase Was Set with the user id of ${id}`)})
            .catch((err)=>{
                console.log(err.message);
            })
        }
    }

    const signUpSubmitHandler=(values)=>{
        signUp(values.fullname,values.email,values.password);
    }


    return(
        <>
            <div className='signup-form'>
                 {!!error&& <div className='error auth-error'>{error}</div>}
                <div className='signup-form-container'>
                    <span style={{background:'blue'}}></span>
                        <Formik
                    onSubmit={signUpSubmitHandler}
                    validateOnMount={true}
                    initialValues={signUpInitialValues}
                    validationSchema={signUpValidationSchema}
                >
                    {
                        ({isValid,isSubmitting})=>{
                            return(
                                <Form>
                                    <div className='signup-lead'>Sign Up</div>
                              
                                    <FormField placeholder='FullName..' label='Full name' type='text' name='fullname'  />
                                    <FormField placeholder='Email..' label='email' type='email' name='email' />
                                    <FormField placeholder='password...' label='password' type='password' name='password' />
                                    <FormField placeholder='Confirm password...' label= 'confirm password' type='password' name='verifypassword' />
                                    <button className='login-button'  disabled={!isValid||isSubmitting}>Signup</button>
                                    <p style={{textAlign:'center',marginTop:'6px',fontWeight:'bold'}}>Wanna Login,{<Link to='/login'>Click</Link>} here</p>
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