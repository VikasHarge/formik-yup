import ErrorMsg from '@/util/ErrorMsg'
import { ErrorMessage, Field } from 'formik'
import React from 'react'



const Input: React.FC = (props: any) => {
    const { name, label, ...rest } = props
    return (
        <div className='w-full h-fit flex flex-col px-6x py-8x ' >
            <label className='font-bold' htmlFor={name} >{label}</label>
            <Field name={name} >
                {
                    (props : any)=>{
                        const {field, meta, form} = props
                        return <input 
                                    className={`bg-lightBlue p-8x pl-12x rounded-pm ${meta.touched && form.errors[name] ? 'border-2 border-red' : '' }  `} 
                                    id={name} 
                                    name={name} 
                                    {...rest} 
                                    {...field}
                                />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </div>
    )
}

export default Input