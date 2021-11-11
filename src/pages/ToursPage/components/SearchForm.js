import React, { useCallback } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { Formik, Form as FormikForm } from 'formik'

import InputField from '../../../components/SearchForm/components/InputField'
import SelectField from '../../../components/SearchForm/components/SelectField'
import { cityOptions } from '../../../components/SearchForm/configs/optionConfigs'
import { useDataContext } from '../../../components/hooks/DataProvider'

import validationSchema from '../validations'
import {
  fetchAllTours,
  fetchCityTours,
  fetchKeyWordWithCityTours,
  fetchKeyWordTours,
} from '../api'

const SearchForm = () => {
  const { setLoading, setTours } = useDataContext()
  const searchRule = (keyWord, city) => {
    if (keyWord && city) return fetchKeyWordWithCityTours(keyWord, city)
    if (city) return fetchCityTours(city)
    if (keyWord) return fetchKeyWordTours(keyWord)

    return fetchAllTours()
  }

  const handleSubmit = useCallback(
    (values, { setSubmitting }) => {
      const { key_word: keyWord, city } = values
      setLoading(true)
      return searchRule(keyWord, city)
        .then((res) => {
          setSubmitting(false)
          setTours(res)
          setLoading(false)
        })
        .catch((error) => {
          setSubmitting(false)
          console.log(error)
        })
    },
    [setLoading, setTours],
  )

  return (
    <section className='tours-page__search'>
      <Formik
        initialValues={{ key_word: '', city: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormikForm>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <InputField
                name='key_word'
                className='tours-page__search-input'
              />
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <SelectField name='city' className='tours-page__search-select'>
                {cityOptions.map(({ label, value }, index) => {
                  return (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  )
                })}
              </SelectField>
            </Form.Group>
          </Row>
          <Row>
            <Col className='d-flex justify-content-end'>
              <Button type='reset' variant='outline-secondary' className='me-3'>
                清除
              </Button>
              <Button type='submit' variant='outline-primary'>
                搜尋
              </Button>
            </Col>
          </Row>
        </FormikForm>
      </Formik>
    </section>
  )
}

export default SearchForm
