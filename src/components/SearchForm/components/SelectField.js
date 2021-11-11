import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className='error text-danger'>{meta.error}</div>
      ) : null}
    </div>
  )
}

SelectField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
}

export default SelectField
