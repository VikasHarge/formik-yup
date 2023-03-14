import React from 'react'
import Checkbox from './Checkbox';
import DatePicker from './DatePicker';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';

const FormikControl = (props: { [x: string]: any; control: any }) => {

    const {control, ...rest} = props

    switch (control) {
        case 'input' :
            return <Input {...rest} />
        case 'textarea' :
            return <Input {...rest} />
        case 'select' :
            return <Select {...rest} />
        case 'radio' :            
            return <Radio {...rest} />
        case 'checkbox' :
            return <Checkbox {...rest} />
        case 'date' :
            return <DatePicker {...rest} />
        default :
             return null
    }
}

export default FormikControl