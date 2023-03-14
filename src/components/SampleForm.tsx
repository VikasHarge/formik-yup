import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { formikUser, formikUserError } from '@/util/types/types'




const SampleForm : React.FC = () => {

  const initialValues : formikUser = {
    name : '',
    email : '',
    about : ''
  }

  //Yup Validation Schema
  const validationSchema = Yup.object({
    name  : Yup.string().required('Required.!'),
    email : Yup.string().email('Invalid Email Format').required('Required.!'),
    about : Yup.string().required('Required.!'),
    adress : Yup.string().required('Required.!').min(4).max(22)
  })

  const formik = useFormik<formikUser>({
    initialValues,
    onSubmit : (values : formikUser) : void => {
      console.log('form data', values);
    },
    validationSchema,
  })

  return (
    <div className='bg-white w-96 h-fit p-6x rounded-pm shadow-pm' >
        <h1 className='text-pm text-darkGrey p-6x pl-12x'>User details form</h1>
        <form className='flex flex-col p-6x pl-12x ' onSubmit={formik.handleSubmit} >
          <label  htmlFor='name'>Name</label>
          <input
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            type='text'
            id='name'
            name='name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value = {formik.values.name}
          />
          { formik.touched.name && formik.errors.name ? <div className='text-red' >{formik.errors.name}</div> : null}

          <label className='mt-4' htmlFor='email'>Email</label>
          <input
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            type='email'
            id='email'
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          { formik.touched.email && formik.errors.email ? <div className='text-red' >{formik.errors.email}</div> : null}


          <label className='mt-4' htmlFor='about'>About</label>
          <input
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            type='text'
            id='about'
            name='about'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.about}
          />
          { formik.touched.about && formik.errors.about ? <div className='text-red' >{formik.errors.about}</div> : null}

          <label className='mt-4' htmlFor='adress'>Adress</label>
          <textarea
            className='bg-lightBlue p-8x pl-12x rounded-pm'
            id='adress'
            name='adress'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.adress}
          />
          { formik.touched.adress && formik.errors.adress ? <div className='text-red' >{formik.errors.adress}</div> : null}
          
          <button type='submit' className='bg-pink w-fit px-8x py-6x rounded-pm text-white my-4'  >Submit</button>
        </form>
    </div>
  )
}

export default SampleForm