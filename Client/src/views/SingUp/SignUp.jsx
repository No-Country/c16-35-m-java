import React from 'react';
import { useForm } from 'react-hook-form'
import axios from 'axios'

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode:'all',
  });
  
  const handleSignUp = async (values) => {
    console.log(values)
    try{
      await axios.post('', values)
    }
    catch(error){
      setError(true)
      console.log(error)
    }
  }


  return(
    <section style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <h1 style={{fontSize:'4rem'}}>Registrate</h1>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div style={{display:'flex', flexDirection:'column',alignItems:'flex-start', gap:'0.5rem'}}>

          <label>Email</label>
          <input style={{background:'lightgrey', width:'20rem', padding:'0.6rem 1rem', borderRadius:'7px'}}
          {...register('email',{required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
          type="text" name='email' placeholder='usuario@gmail.com' />
          <div style={{color:'red'}}>
            {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
            {errors.email?.type === 'pattern' && <p>El correo electronico no es valido</p>}
          </div>

          <label>Contraseña</label>
          <input style={{background:'lightgrey', width:'20rem', padding:'0.6rem 1rem',  borderRadius:'7px'}}
          {...register('password',{required: true, minLength:8})}
          type="password" name='password' placeholder='xxxxxxxxxx' />
          <div style={{color:'red'}}>
            {errors.password?.type === 'required' && <p>El campo contraseña es requerido</p>}
            {errors.password?.type === 'minLength' && <p>La contraseña debe tener al menos 8 caracteres</p>}
          </div>
        </div>

        <button 
        style={{background:'lightgrey', width:'8rem', padding:'0.6rem 1rem', borderRadius:'10px', marginTop:'1rem', cursor:'pointer'}}
        type='submit'>
          Registrarme
        </button>
      </form>
    </section>
  )
}

export default SignUp