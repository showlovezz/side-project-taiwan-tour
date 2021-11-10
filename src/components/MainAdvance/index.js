import React from 'react'
import { Button } from 'react-bootstrap'
import { Formik, Form as FormikForm, useField } from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

import './styles.scss'

// import { fetchTours } from './api'

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props)
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  )
}

MyTextInput.propTypes = {
  label: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' })
  return (
    <div>
      <label className='checkbox-input'>
        <input type='checkbox' {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

MyCheckbox.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  props: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  )
}

MySelect.propTypes = {
  label: PropTypes.string,
  // props: PropTypes.object.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
}

const MainAdvance = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     city: '',
  //   },
  //   onSubmit: (values) => {
  //     return fetchTours(values.city, 10).then((res) => {
  //       console.log('values', 'NewTaipei', values)

  //       console.log(res)
  //     })

  //     // alert(JSON.stringify(values, null, 2))
  //   },
  // })

  // return (
  //   <section className='main-advance'>
  //     <h1 className='main-advance__title'>台灣好好</h1>
  //     <form onSubmit={formik.handleSubmit}>
  //       <label htmlFor='email'>Email Address</label>
  //       <input
  //         id='city'
  //         name='city'
  //         type='text'
  //         onChange={formik.handleChange}
  //         value={formik.values.city}
  //       />

  //       <MySelect label='Job Type' name='jobType'>
  //         <option value=''>Select a job type</option>
  //         <option value='designer'>Designer</option>
  //         <option value='development'>Developer</option>
  //         <option value='product'>Product Manager</option>
  //         <option value='other'>Other</option>
  //       </MySelect>

  //       <button type='submit'>Submit</button>
  //     </form>
  //   </section>
  // )
  return (
    <section className='main-advance'>
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          city: '', // added for our select
          type: '', // added for our select
        }}
        validationSchema={Yup.object({
          city: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type',
            )
            .required('Required'),
          type: Yup.string()
            .oneOf(
              ['designer', 'development', 'product', 'other'],
              'Invalid Job Type',
            )
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <FormikForm>
          <MySelect name='city'>
            <option value=''>選擇縣市</option>
            <option value='designer'>Designer</option>
            <option value='development'>Developer</option>
            <option value='product'>Product Manager</option>
            <option value='other'>Other</option>
          </MySelect>

          {/* <MySelect name='jobType'>
            <option value=''>Select a job type</option>
            <option value='designer'>Designer</option>
            <option value='development'>Developer</option>
            <option value='product'>Product Manager</option>
            <option value='other'>Other</option>
          </MySelect> */}

          <MySelect name='type'>
            <option value=''>選擇類型</option>
            <option value='designer'>Designer</option>
            <option value='development'>Developer</option>
            <option value='product'>Product Manager</option>
            <option value='other'>Other</option>
          </MySelect>

          {/* <button type='submit'>Submit</button> */}
          <Button type='submit' variant='outline-primary'>
            Primary
          </Button>
        </FormikForm>
      </Formik>
    </section>
  )
}

export default MainAdvance
