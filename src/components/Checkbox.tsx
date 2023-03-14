import ErrorMsg from '@/util/ErrorMsg'
import { ErrorMessage, Field } from 'formik'
import React from 'react'



const Checkbox: React.FC = (props: any) => {
    const { name, label, options, ...rest } = props
    return (
        <div className='w-full h-fit flex flex-col px-6x py-8x' >
            <label className='font-bold' htmlFor={name} >{label}</label>
            <Field className='bg-lightBlue p-8x pl-12x rounded-pm' name={name} {...rest} >
                {
                    ({ field }: any) => {
                        
                        return <div className='flex flex-row justify-start gap-3' >
                            
                           { options.map((option: { key: string, value: string }, index: string) => {
                                    return <div className='p-4x flex  gap-2 justify-start items-center' key={option.key}>
                                        <input
                                            type='checkbox' 
                                            id={option.value} 
                                            {...field} 
                                            value={option.value} 
                                            checked={field?.value.includes(option.value)}
                                        />
                                        <label htmlFor={option.key} >{option.key}</label>
                                    </div>
                                })}
                        </div>

                    }
                }
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </div>
    )
}

export default Checkbox