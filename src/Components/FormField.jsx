import { Field,ErrorMessage } from 'formik';

export const FormField=({
    label,
    type='text',
    name,
    placeholder
})=>{

    return(
    <label>
      <div className='login-form-group'>

            <div className='login-label signup-label  '>{label}</div>
            <Field  placeholder={placeholder} className='login-Field signup-field  '  type={type} name={name} />
            <ErrorMessage name={name} component='div' className='error' />

      </div>
    </label>
)
}