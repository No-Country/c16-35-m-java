import './HomeDisciplinas.scss'
import { Link } from'react-router-dom'
import { DISCIPLINAS } from '../../data-profesores';

function HomeDisciplinas() {
return (
    <section className='disciplinas-home-container'>
      <h3>Todas las disciplinas </h3>
      <div className="disciplinas-home">
        <div className="disciplinas-col">
          {DISCIPLINAS.slice(0,5).map(disciplina =>{
            const {materia} = disciplina
            return(
              <Link to={'/'}>{materia}</Link>
            )
          })}
        </div>
        <div className="disciplinas-col">
          {DISCIPLINAS.slice(5,10).map(disciplina =>{
            const {materia} = disciplina
            return(
              <Link to={'/'}>{materia}</Link>
            )
          })}
        </div>
        <div className="disciplinas-col">
          {DISCIPLINAS.slice(10,13).map(disciplina =>{
            const {materia} = disciplina
            return(
              <Link to={'/'}>{materia}</Link>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeDisciplinas;
