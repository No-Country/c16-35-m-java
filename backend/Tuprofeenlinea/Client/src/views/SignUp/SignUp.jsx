import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BotonesRedes from '../../components/Nav/Formulario/BotonesRedes';
import EyePassword from '../../assets/eye-password.svg';
import EyeRepeatPassword from '../../assets/eye-repeat-password.svg';

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    mode: 'all',
  });

  const handleSignUp = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8080/api/client', formData);
      console.log('Usuario registrado con éxito:', response.data);
      // Redireccionar a la página de inicio de sesión u otra página después del registro exitoso
    } catch (error) {
      console.error('Error al registrar usuario:', error);

    }
  };

  return (
    <section className='signup-container'>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className='signup-form-inputs'>
          <label>Correo Electrónico</label>
          <input
            {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
            type="text"
            name='email'
          />
          <div className='signup-error'>
            {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
            {errors.email?.type === 'pattern' && <p>El correo electrónico no es válido</p>}
          </div>

          <label>Contraseña</label>
          <div className="form-input">
            <input
              {...register('password', { required: true, minLength: 8 })}
              type="password"
              name='password'
              placeholder='*********'
            />
            <span><img className='eye-form' src={EyePassword} alt="Icono" /></span>
          </div>
          <div className='signup-error'>
            {errors.password?.type === 'required' && <p>El campo contraseña es requerido</p>}
            {errors.password?.type === 'minLength' && <p>La contraseña debe tener al menos 8 caracteres</p>}
          </div>

          <label>Repetir contraseña</label>
          <div className="form-input">
            <input
              {...register('repeatPassword', { required: true, minLength: 8 })}
              type="password"
              name='repeatPassword'
            />
            <span><img src={EyeRepeatPassword} alt="Icono" /></span>
          </div>
          <div className='signup-error'>
            {errors.repeatPassword?.type === 'required' && <p>Por favor, repite la contraseña</p>}
            {errors.repeatPassword?.type === 'minLength' && <p>La contraseña debe tener al menos 8 caracteres</p>}
          </div>
        </div>
        <button className='btn-form' type='submit'>Registrarse</button>
        <div className="pregunta-signup">
          <p>¿Ya tienes cuenta?</p>
          <Link to="/login">Inicia sesión aquí</Link>
        </div>
        <div className="form-opciones">
          <p>También puedes iniciar sesión con</p>
          <BotonesRedes />
        </div>
      </form>
    </section>
  );
}

export default SignUp;
nUp