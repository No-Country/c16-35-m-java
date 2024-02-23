import { useParams } from "react-router-dom";
import { PROFESORES } from '../../data-profesores'
import Manzana from '../../assets/Manzana.svg'
import './Subject.scss'
import { useEffect } from "react";
function Subject() {
  const {materia} = useParams()
  useEffect(() =>{
    window.scrollTo(0,0)
  },[])
	return (
		<section className="subject-container">
			<h1>{materia}</h1>
      <div className="subject-card">
        {PROFESORES.map(profesor =>{
          const { imagen, descripcion, nombre, clase, valoracion } = profesor;
          return(
            <div key={nombre} className='card-profe'>
            <img src={imagen} alt={imagen} />
            <div className='card-profe-info'>
              <div className='valoracion'>
                <img src={Manzana} alt='Icono' />
                <p className='profe-valoracion'>{valoracion}</p>
              </div>
              <h2 className='profe-nombre'>{nombre}</h2>
              <p className='profe-descripcion'>{descripcion}</p>
              <p className='profe-clase'>{clase}</p>
              <a className='profe-enlace' href='#'>
                Ver más
              </a>
            </div>
          </div>
          )
        })}
      </div>
		</section>
	);
}

export default Subject;
