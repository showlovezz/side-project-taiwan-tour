import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Formik, Form as FormikForm } from 'formik'

import InputField from './components/InputField'
import SelectField from './components/SelectField'
import validationSchema from './validations'
import { cityOptions, categoryOptions } from './configs/configs'
import './styles.scss'

const SearchForm = () => {
  return (
    <section className='search-form'>
      <Formik
        initialValues={{ key_word: '', city: '', category: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        <FormikForm>
          <Row className='mb-2'>
            <Form.Group as={Col}>
              <InputField name='key_word' className='search-form__input' />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <SelectField name='city' className='search-form__select'>
                {cityOptions.map(({ label, value }, index) => {
                  return (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  )
                })}
              </SelectField>
            </Form.Group>
            <Form.Group as={Col}>
              <SelectField name='category' className='search-form__select'>
                {categoryOptions.map(({ label, value }, index) => {
                  return (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  )
                })}
              </SelectField>
            </Form.Group>
          </Row>
          <Button type='submit' variant='outline-primary'>
            搜尋
          </Button>
        </FormikForm>
      </Formik>
    </section>
  )
}

export default SearchForm
