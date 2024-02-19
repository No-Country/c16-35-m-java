import Facebook from "../../assets/facebook.png";
import Google from "../../assets/google.png";
import "./BotonesRedes.scss";

const BotonesRedes = () => {
  return (
    <div className="btns-form">
      <button>
        <img className="img-btn" src={Google} alt="Google" />
      </button>
      <button>
        <img className="img-btn" src={Facebook} alt="Facebook" />
      </button>
    </div>
  );
};

export default BotonesRedes;
