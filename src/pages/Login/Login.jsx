import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authLoginThunk } from 'redux/auth/auth.thunk';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState,
     } = useForm({
    defaultValues: {
    email: '',
    password: '',
    }
  });
  const onSubmit = async  data => {
try {
      await dispatch(authLoginThunk(data)).unwrap();
      // await dispatch(authgetInfoThunk()).unwrap();
      navigate('/contacts', { replace: true });
    } catch {
    
    }
};

useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
    email: '',
    password: '', });
    }
  }, [formState, reset]);
  return (
    <>
     <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>
      <div>
       <label htmlFor="email">Email</label>
      <input name="email" {...register("email")} type="text" />
<br />
       <label htmlFor="password">Password</label>
          <input name="password" {...register("password")} type="text" />
      </div>
      
      <button type='submit'>Login</button>
      </form>
    </>
  )
}
