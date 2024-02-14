import React from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios'

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode:'all',
  });
  
  const handleSignUp = async (values) => {
    try{
      await axios.post('', values)
    }
    catch(error){
      setError(true)
      console.log(error)
    }
  }


  return(
    <section className='signup-container'>
      <h1>Registrate</h1>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className='signup-form-inputs'>

          <label>Email</label>
          <input 
          {...register('email',{required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
          type="text" name='email' placeholder='usuario@gmail.com' />
          <div className='signup-error'>
            {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
            {errors.email?.type === 'pattern' && <p>El correo electronico no es valido</p>}
          </div>

          <label>Contraseña</label>
          <input
          {...register('password',{required: true, minLength:8})}
          type="password" name='password' placeholder='xxxxxxxxxx' />
          <div className='signup-error'>
            {errors.password?.type === 'required' && <p>El campo contraseña es requerido</p>}
            {errors.password?.type === 'minLength' && <p>La contraseña debe tener al menos 8 caracteres</p>}
          </div>
        </div>
        <button 
        type='submit'>
          Registrarme
        </button>
      </form>
    </section>
  )
}

export default SignUp