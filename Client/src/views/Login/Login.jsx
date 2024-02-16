import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import EyePassword from "../../assets/eye-password.svg";
import BotonesRedes from "../../components/Nav/Formulario/BotonesRedes";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const handleLogin = async (values) => {
    try {
      await axios.post("", values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="signup-container">
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="signup-form-inputs">
          <label>Correo Electrónico</label>
          <input
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            type="text"
            name="email"
          />
          <div className="signup-error">
            {errors.email?.type === "required" && (
              <p>El campo email es requerido</p>
            )}
            {errors.email?.type === "pattern" && (
              <p>El correo electrónico no es válido</p>
            )}
          </div>

          <label>Contraseña</label>
          <div className="form-input">
            <input
              {...register("password", { required: true, minLength: 8 })}
              type="password"
              name="password"
              placeholder="*********"
            />
            <span>
              <img className="eye-form" src={EyePassword} alt="Icono" />
            </span>
          </div>
          <div className="signup-error">
            {errors.password?.type === "required" && (
              <p>El campo contraseña es requerido</p>
            )}
            {errors.password?.type === "minLength" && (
              <p>La contraseña debe tener al menos 8 caracteres</p>
            )}
          </div>
        </div>
        <button className="btn-form" type="submit">
          Iniciar Sesión
        </button>
        <div className="pregunta-signup">
          <p>¿No tienes cuenta?</p>
          <Link to="/signup">Regístrate aquí</Link>
        </div>
        <div className="form-opciones">
          <p>También puedes iniciar sesión con</p>
          <BotonesRedes />
        </div>
      </form>
    </section>
  );
};

export default Login;
