import React from 'react';

const FormInput = props => {
  const {
    id,
    name,
    type,
    placeholder,
    onChange,
    className,
    value,
    error,
    label
  } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
        <input 
              id={id} 
              name={name} 
              type={type} 
              placehoder={placeholder} 
              value={value}
              className={className}
              onChange={onChange}
              autoComplete="false" 
              style={{ border: error ? 'solid 1px red' : ''}}
        />
        error ? <p style={{ color: 'red', fontSize: '14px'}}>{error}</p> : ''
    </>
  );
};

export default FormInput;
