import ErrorMsg from '@/util/ErrorMsg'
import { ErrorMessage, Field } from 'formik'
import React from 'react'



const Textarea: React.FC = (props: any) => {
    const { name, label, ...rest } = props
    return (
        <div className='w-full h-fit flex flex-col px-6x py-8x' >
            <label className='font-bold' htmlFor={name} >{label}</label>
            <Field as='textarea' className='bg-lightBlue p-8x pl-12x rounded-pm' id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={ErrorMsg} />
        </div>
    )
}

export default Textarea