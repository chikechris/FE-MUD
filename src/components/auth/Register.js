import React from 'react';
import { FormInput } from '../reuseable/FormInput';

const Register = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-inner'>
        <form>
          <h3>Register</h3>
          <div className='form-group'>
            <FormInput
              type='text'
              name='username'
              label='username'
              className='form-control'
              placeholder='Please Enter Username'
              value=''
              error=''
              // onChange={onChange}
            />
            <FormInput
              type='text'
              name='password'
              label='password'
              className='form-control'
              placeholder='Please Enter Username'
              value=''
              error=''
              // onChange={onChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
