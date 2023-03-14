import ErrorMsg from '@/util/ErrorMsg'
import { ErrorMessage, Field } from 'formik'
import React from 'react'



const Select: React.FC = (props: any) => {
    const { name, label, options, ...rest } = props
    console.log('options ', options);
    
    return (
        <div className='w-full h-fit flex flex-col px-6x py-8x' >
            <label className='font-bold' htmlFor={name} >{label}</label>
            <Field as='select' className='bg-lightBlue p-8x pl-12x rounded-pm' id={name} name={name} {...rest} >
                {
                    options?.map((option: { value: string, key : string}, index: any) : any => {
                        console.log(option);
                        
                        return <option key={option?.value} value={option?.value} >{option?.key}</option>
                    })
                }
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </div>
    )
}

export default Select