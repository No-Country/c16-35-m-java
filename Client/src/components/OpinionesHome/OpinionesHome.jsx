import './OpinionesHome.scss'
import { OPINIONES } from '../../data-profesores';
import Estrella from '../../assets/Estrella.svg'
function OpinionesHome() {
  return (
    <section className='opiniones-home-container'>
      <h3>Quienes eligieron confiar </h3>
      <div className='opiniones-home'>
        {OPINIONES.map(opinion =>{
          const { nombre, materia, valoracion, alumno, reseña} = opinion
          return(
            <div className="opinion-home-card">
              <div className="card-docente">
                <div className="info-card">
                  <p>{nombre}-</p>
                  <p>Profe de {materia}</p>
                </div>
                <div className="card-home-valoracion">
                  <img src={Estrella} alt="Estrella"/>
                  <p className='valoracion'>{valoracion}</p>
                </div>
              </div>
              <p className='card-home-reseña'>{reseña}</p>
              <p className='card-home-alumno'>{alumno}</p>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default OpinionesHome;
