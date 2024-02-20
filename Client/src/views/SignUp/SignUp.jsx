import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import EyePassword from '../../assets/eye-password.svg';
import EyeRepeatPassword from '../../assets/eye-repeat-password.svg';
import BotonesRedes from '../../components/BotonesRedes/BotonesRedes.jsx';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [loading, setLoading] = useState(false)

  const handlePassword = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };
  const handleRepeatPassword = () => {
    setShowRepeatPassword(prevShowRepeatPassword => !prevShowRepeatPassword);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
    setError
  } = useForm({
    mode: 'all',
  });

  const handleSignUp = async (values) => {
    const { password, repeatPassword } = getValues()
    if(password !== repeatPassword){
      setError('repeatPassword', {
        type:'manual',
        message:'Las contraseñas no coinciden'
      });
      return
    }

    setLoading(true)
    try {
      await axios.post('http://localhost:8080/api/client', values);
      setLoading(false)
      navigate('/login')
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='signup-container'>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className='signup-form-inputs'>
          <label>Correo Electrónico</label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            type='text'
            name='email'
          />
          <div className='signup-error'>
            {errors.email?.type === 'required' && <p>El campo email es requerido</p>}
            {errors.email?.type === 'pattern' && <p>El correo electrónico no es válido</p>}
          </div>

          <label>Contraseña</label>
          <div className='form-input'>
            <input
              {...register('password', { required: true, minLength: 8 })}
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='*********'
            />
            <span>
              <img onClick={handlePassword} className='eye-form' src={EyePassword} alt='Icono' />
            </span>
          </div>
          <div className='signup-error'>
            {errors.password?.type === 'required' && <p>El campo contraseña es requerido</p>}
            {errors.password?.type === 'minLength' && (
              <p>La contraseña debe tener al menos 8 caracteres</p>
            )}
          </div>

          <label>Repetir contraseña</label>
          <div className='form-input'>
            <input
              {...register('repeatPassword', { required: true, minLength: 8 })}
              type={showRepeatPassword ? 'text' : 'password'}
              name='repeatPassword'
            />
            <span>
              <img onClick={handleRepeatPassword} src={EyeRepeatPassword} alt='Icono' />
            </span>
          </div>
          <div className='signup-error'>
            {errors.repeatPassword?.type === 'required' && <p>El campo contraseña es requerido</p>}
            {errors.repeatPassword?.type === 'minLength' && (
              <p>La contraseña debe tener al menos 8 caracteres</p>
            )}
            {errors.repeatPassword?.type === 'manual' && (
              <p>{errors.repeatPassword.message}</p>
            )}
          </div>
        </div>
        {loading ? (
          <div className="loader">
            <div className="spinner"></div>
          </div>
          ) :(
            <div>
              <button className='btn-form' type='submit'>Registrarse</button>
            </div>
          )}
        <div className='pregunta-signup'>
          <p>¿Ya tienes cuenta?</p>
          <Link to='/login'>Inicia sesión aquí</Link>
        </div>
        <div className='form-opciones'>
          <p>También puedes iniciar sesión con</p>
          <BotonesRedes />
        </div>
      </form>
    </section>
  );
};

export default SignUp;
