import ErrorMsg from '@/util/ErrorMsg'
import { ErrorMessage, Field } from 'formik'
import DateView from 'react-datepicker'
import React from 'react'
import "react-datepicker/dist/react-datepicker.css";

const DatePicker: React.FC = (props: any) => {

    const { name, label, ...rest } = props

    return (
        <div className='w-full h-fit flex flex-col px-6x py-8x' >
            <label className='font-bold' htmlFor={name} >{label}</label>
            <Field name={name} >
                {
                    (props : any) => {
                        const { form, field, meta } = props
                        const { setFieldValue } = form
                        const { value } = field
                        console.log(props);
                        
                        return <DateView
                            id={name}
                            {...field}
                            {...rest}
                            selected={value}
                            onChange={(val: any) => setFieldValue(name, val)}
                        />
                    }
                }
            </Field>
            <ErrorMessage name={name} component={ErrorMsg} />
        </div>
    )
}

export default DatePicker