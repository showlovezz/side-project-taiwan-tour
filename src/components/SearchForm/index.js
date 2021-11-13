import React, { useCallback } from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import { Formik, Form as FormikForm } from 'formik';

import { useDataContext } from '../../components/hooks/DataProvider';

import InputField from './components/InputField';
import SelectField from './components/SelectField';
import validationSchema from './validations';
import { cityOptions, categoryOptions } from './configs/optionConfigs';
import { fetchTours } from './api';

import './styles.scss';

const SearchForm = () => {
  const {
    // loading,
    setLoading,
    // tours,
    setTours,
    // activities,
    setActivities,
    // restaurants,
    setRestaurants,
    // hotels,
    setHotels,
  } = useDataContext();

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    setLoading(true);
    return fetchTours(6).then(res => {
      setTours(res);
      setActivities([]);
      setRestaurants([]);
      setHotels([]);
      setLoading(false);
    });
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2))
    //   setSubmitting(false)
    // }, 400)
  }, []);

  return (
    <section className="search-form">
      <Formik
        initialValues={{ key_word: '', city: '', category: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormikForm>
          <Row className="mb-2">
            <Form.Group as={Col}>
              <InputField name="key_word" className="search-form__input" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <SelectField name="city" className="search-form__select">
                {cityOptions.map(({ label, value }, index) => {
                  return (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  );
                })}
              </SelectField>
            </Form.Group>
            <Form.Group as={Col}>
              <SelectField name="category" className="search-form__select">
                {categoryOptions.map(({ label, value }, index) => {
                  return (
                    <option key={index} value={value}>
                      {label}
                    </option>
                  );
                })}
              </SelectField>
            </Form.Group>
          </Row>
          <Button type="submit" variant="outline-primary">
            搜尋
          </Button>
        </FormikForm>
      </Formik>
    </section>
  );
};

export default SearchForm;
