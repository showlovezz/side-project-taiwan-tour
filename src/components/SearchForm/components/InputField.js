import React from 'react'
import PropTypes from 'prop-types'
import { useField } from 'formik'

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props)

  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className='text-input'
        placeholder='請輸入搜尋關鍵字'
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className='error text-danger'>{meta.error}</div>
      ) : null}
    </>
  )
}

InputField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
}

export default InputField
