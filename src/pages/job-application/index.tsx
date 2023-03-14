import ErrorMsg from '@/util/ErrorMsg'
import { formikjob, formikUser, formikUserError } from '@/util/types/types'
import { Formik, Form, Field, ErrorMessage, FormikHelpers, FastField } from 'formik'
import { type } from 'os'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'



const SimpleForm3: React.FC = () => {

  const [savedDataState, setSavedData] = useState<formikjob | null>(null)

  const initialValues: formikjob = {
    jobCategory: '',
    jobId: null,
    jobTitle: '',
    name: '',
    surname: '',
    phone: '',
    email: '',
    city: '',
    pincode: '',
    dob: '',
    experience: null,
  }

  const savedData: formikjob = {
    jobCategory: 'Full Time',
    jobId: 121212,
    jobTitle: 'Front End',
    name: 'Vikas',
    surname: 'Harge',
    phone: '7767919796',
    email: '',
    city: '',
    pincode: '',
    dob: '',
    experience: null,
  }

  const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  //Yup Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name required.!'),
    email: Yup.string().email('Invalid Email Format').required('Email ID Required.!'),
    jobCategory: Yup.string()
      .required('job Category required')
      .test('jobCategory', "Please select job category", val => {
        val === ''
        return true
      }
      ),
    jobId: Yup.number().test('Job Id', 'must be less than 6 charector', val => {
      return val?.toString().length === 6
    }).required('Job Id Require').typeError('Job Id Require'),
    jobTitle: Yup.string().required('Job title required'),
    phone: Yup.string()
      .typeError('not a phone number')
      .matches(phoneRegex, "Not a valid phone number")
      .length(10, 'phone number should be 10 digits'),
    city: Yup.string()
      .required('Current city required'),
    pincode: Yup.number()
      .positive('should be a number')
      .integer()
      .required('pincode Required')
      .typeError('valid pincode required')
      .test('pincode', 'pincode must be exactly 6 digit', val => val.toString().length === 6),
    dob: Yup.date().required('Date of birth required'),
    experience: Yup.number()
                   .required('Experince Required')
  })

  const onSubmit = (values: formikjob): void => {
    console.log('Form Data', values);
  }



  return (
    <div className='bg-white w-96 h-fit p-6x rounded-pm shadow-pm' >
      <h1 className='text-pm text-darkGrey p-6x pl-12x'>Job application form</h1>
      <Formik
        initialValues={savedDataState || initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize
      >
        <Form className='flex flex-col p-6x pl-12x ' >

          <label className='mt-1' htmlFor='jobId'>Job ID</label>
          <Field
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            type='number'
            id='jobId'
            name='jobId'
          />
          <ErrorMessage name='jobId' component={ErrorMsg} />


          <label className='mt-4' htmlFor='jobCategory'>Job Category</label>
          <Field
            as='select'
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            id='jobCategory'
            name='jobCategory'
          >
            <option defaultValue='DEFAULT' >--- Select Job Category ---</option>
            <option value='Full Time'>Full Time</option>
            <option value='Part Time'>Part Time</option>
            <option value='Internship'>Internship</option>
          </Field>
          <ErrorMessage name='jobCategory' component={ErrorMsg} />

          <label className='mt-4' htmlFor='jobTitle'>Job Title</label>
          <Field
            as='select'
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            id='jobTitle'
            name='jobTitle'
          >
            <option defaultValue='DEFAULT' >--- Select Job Title ---</option>
            <option value='Front End Developer'>Front End Developer</option>
            <option value='Backend Developer'>Backend Developer</option>
            <option value='React Js Developer'>React Js Developer</option>
            <option value='React Js Developer'>Next Js Developer</option>
          </Field>
          <ErrorMessage name='jobTitle' component={ErrorMsg} />

          <label className='mt-4' htmlFor='experience' >Total Experience</label>
          <Field
            name='experience'
          >
            {
              (props: any) => {
                const { field, meta, form } = props
                

                { return <select
                  id='experience'
                  className='bg-lightBlue p-8x pl-12x rounded-pm'
                  {...field}      
                >
                  {[...Array(10)].map((_, index) => {
                    return <option key={index} value={index}>
                      {index}
                    </option>
                })}
                </select>
                }
              }
            }
          </Field>
          <ErrorMessage name='experience' component={ErrorMsg} />


          <div className='flex w-full flex-row items-center justify-between w-full mt-4' >
            <div className='flex w-6/12 flex-col' >
              <label className='w-6/12' htmlFor='name'>First Name</label>
              <FastField
                className='bg-lightBlue p-8x pl-12x rounded-pm'
                type='text'
                id='name'
                name='name'
              />
            </div>

            <div className='flex w-5/12 flex-col' >
              <label className='w-6/12' htmlFor='surname'>surname</label>
              <Field
                className='bg-lightBlue p-8x pl-12x rounded-pm'
                type='text'
                id='surname'
                name='surname'
              />
            </div>
          </div>
          <ErrorMessage name='name' component={ErrorMsg} />



          <label className='mt-4' htmlFor='dob'>Date of birth</label>
          <Field
            name='dob'
          >
            {
              (props: any) => {
                const { field, meta, form } = props
                

                return <div>
                  <input
                    className='bg-lightBlue p-8x pl-12x rounded-pm w-full'
                    type='date'
                    value=''
                    {...field}
                  />
                  {meta.touched && meta.error ? <div className='text-red' >{meta.error}</div> : null}
                </div>
              }
            }
          </Field>

          <label className='mt-4' htmlFor='email'>Email</label>
          <Field
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            type='email'
            id='email'
            name='email'
          />
          <ErrorMessage name='email' component={ErrorMsg} />

          <label className='mt-4' htmlFor='phone'>Phone number</label>
          <Field
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            type='number'
            id='phone'
            name='phone'
          />
          <ErrorMessage name='phone' component={ErrorMsg} />

          <label className='mt-4' htmlFor='city'>City</label>
          <Field
            name='city'
          >
            {
              (props: any) => {
                const { field, form, meta } = props
                console.log('Form error', form?.errors);
                

                return <div>
                  <input type='text' value='' className='w-full bg-lightBlue p-8x pl-12x rounded-pm' id='city' {...field} />
                  {meta.touched && meta.error ? <div className='text-red' >{meta.error}</div> : null}
                </div>
              }
            }
          </Field>



          <label className='mt-4' htmlFor='pincode'>Pincode</label>
          <Field
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            type='number'
            id='pincode'
            name='pincode'
          />
          <ErrorMessage name='pincode' component={ErrorMsg} />



          <button type='submit' className='bg-pink w-fit px-8x py-6x rounded-pm text-white my-4'  >Submit</button>
          <button onClick={()=>{setSavedData(savedData)}} className='bg-pink w-fit px-8x py-6x rounded-pm text-white my-4'  >Load Data</button>
        </Form>
      </Formik>
    </div>
  )
}

export default SimpleForm3