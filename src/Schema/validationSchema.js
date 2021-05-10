import * as Yup from 'yup';
import { string  } from 'yup';

export const signUpInitialValues={

    fullname:"",
    email:"",
    password:"",
    verifypassword:""

}

export const signUpValidationSchema=Yup.object().shape({
    fullname:string().required('name field required'),
    email:string().required('email required').email('email not valid'),
    password:string().required('password required').min(5,'minimum 5 character'),
    verifypassword:string().required('confirm password required').oneOf([Yup.ref('password'),null],'password dosen\'t match')
})

export const loginInitialValues={
    email:"",
    password:"",
}

export const LoginValidationSchema=Yup.object().shape({
    email:string().email('email not valid').required('email require'),
    password:string().required('password required')
    
})