import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import EyePassword from "../../assets/eye-password.svg";
import EyeRepeatPassword from "../../assets/eye-repeat-password.svg";
import BotonesRedes from "../../components/BotonesRedes/BotonesRedes.jsx";
import "./SignUp.scss";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const handleSignUp = async (values) => {
    try {
      await axios.post("", values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="signup-container">
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="signup-form-inputs">
          <label>Correo Electronico</label>
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
              <p>El correo electronico no es valido</p>
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

          <label>Repetir contraseña</label>
          <div className="form-input">
            <input
              {...register("password", { required: true, minLength: 8 })}
              type="password"
              name="password"
            />
            <span>
              <img src={EyeRepeatPassword} alt="Icono" />
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
          Registrarse
        </button>
        <div className="pregunta-signup">
          <p>¿Ya tienes cuenta?</p>
          <Link to="/login">Inicia sesíon aqui</Link>
        </div>
        <div className="form-opciones">
          <p>Tambien puedes iniciar sesíon con</p>
          <BotonesRedes />
        </div>
      </form>
    </section>
  );
};

export default SignUp;
