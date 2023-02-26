import { publicApi } from 'http/http';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function Register() {
const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState,
     } = useForm({
    defaultValues: {
    name: '',
    email: '',
    password: '',
    }
     });
  
  const onSubmit = async ({password, email, name}) => {
    console.log(password, email, name)
  try {
    await publicApi.post('users/signup', { password, email, name });
    navigate('/login', { replace: true });
  } catch (error) {
    console.log(error);
  }
};

 
useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({
    name: '',
    email: '',
    password: '', });
    }
  }, [formState, reset]);
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>
      <div>
         <label htmlFor="name">Name</label>
      <input name="name" {...register("name")} type="text" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"/>
<br />
       <label htmlFor="email">Email</label>
      <input name="email" {...register("email")} type="text" />
<br />
       <label htmlFor="password">Password</label>
          <input name="password" {...register("password")} type="text" />
      </div>
      
      <button type='submit'>Register</button>
        </form>
    </>
  )
}
