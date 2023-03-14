import FormikControl from '@/components/FormikControl'
import { formikOptions, formikVisit } from '@/util/types/types'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const index = () => {

    const initialValues: formikVisit = {
        name: '',
        email: '',
        discription: '',
        camp: '',
        category: [],
        gender: '',
        visitDate : null
    }

    const options: formikOptions[] = [
        { key: 'select camp site', value: '' },
        { key: 'Camp A', value: 'A' },
        { key: 'Camp B', value: 'B' },
        { key: 'Camp C', value: 'C' },
        { key: 'Camp D', value: 'D' },
    ]

    const categoryOptions: formikOptions[] = [
        { key: 'Friends', value: 'Friends' },
        { key: 'Family', value: 'Family' },
        { key: 'Corporate', value: 'Corporate' },
    ]

    const genderOptions: formikOptions[] = [
        { key: 'Male', value: 'Male' },
        { key: 'Female', value: 'Female' },
    ]

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("invalid email format")
            .required('Email Id is required'),
        name: Yup.string().required('Name is required'),
        discription: Yup.string().required('Discription is required'),
        camp: Yup.string()
            .required('Plese select Campsite Name'),
        gender: Yup.string()
            .required('gender required'),
        category: Yup.array().of(Yup.string()).min(1, 'please select at-list one category')
            .required('please select category'),
        visitDate : Yup.date().required('please select vist date').nullable()
    })

    const onSubmit = (values: any) => console.log('Form Data', values);


    return (
        <div className='bg-white w-96 h-fit p-16x rounded-pm shadow-pm' >
            <h1 className='text-pm text-darkGrey p-6x pl-12x'>visit information form</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => (
                        <Form>
                            <FormikControl
                                control='input'
                                type='text'
                                label='Full Name'
                                name='name'
                            />

                            <FormikControl
                                control='input'
                                type='email'
                                label='Email'
                                name='email'
                            />

                            <FormikControl
                                control='textarea'
                                type='text'
                                label='Discription'
                                name='discription'
                                as='textarea'
                            />

                            <FormikControl
                                control='select'
                                label="select campsite name"
                                name='camp'
                                options={options}
                            />

                            <FormikControl
                                control='radio'
                                label="select gender"
                                name='gender'
                                options={genderOptions}
                            />

                            <FormikControl
                                control='checkbox'
                                label="select category"
                                name='category'
                                options={categoryOptions}
                            />

                            <FormikControl
                                control='date'
                                label="select visit date"
                                name='visitDate'
                            />

                            <button type='submit' className='bg-pink w-fit px-8x py-6x rounded-pm text-white mt-4' >Submit</button>

                        </Form>
                    )
                }

            </Formik>
        </div>
    )
}

export default index