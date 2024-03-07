import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Manzana from '../../assets/Manzana-card.svg';
import { getTeachersBySubject } from '../../redux/actions/actions';
import './Subject.scss';
function Subject() {
	const { materia } = useParams();
	const allTeachers = useSelector((state) => state.allTeachers);
	const PROFESORES = allTeachers.matematica;
	function removeAccents(text) {
		return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	}
	const dispatch = useDispatch();
	useEffect(() => {
		window.scrollTo(0, 0);
		const newMateria = removeAccents(materia);
		dispatch(getTeachersBySubject(`${newMateria}`));
	}, []);

    function TextoConSuspensivos({ texto, longitudMaxima,...props}) {
		if (texto.length > longitudMaxima) {
		  return <p {...props}>{texto.slice(0, longitudMaxima)}...</p>;
		} else {
		  return <p {...props}>{texto}</p>;
		}
	  }


	return (
		<section className='subject-container'>
			<h1>{materia}</h1>
			<div className='subject-card'>
				{PROFESORES?.map((profesor, index) => {
					const { imagePath, descriptionTeacher, name, lastname } = profesor;
					return (
						<div key={index} className='card-profe'>
							<img src={imagePath} alt={name} />
							<div className='card-profe-info'>
								<div className="titulo-profe-card">
								    <h2 className='profe-nombre'>{name} {lastname}</h2>
								    <div className='valoracion'>
									    <img src={Manzana} alt='Icono' />
									    <p className='profe-valoracion'>4.5</p>
								    </div>
								</div>
								<TextoConSuspensivos
								className='profe-descripcion' 
								texto={descriptionTeacher}
								longitudMaxima={90}
								></TextoConSuspensivos>
								<p className='profe-clase'>1ra clase gratis</p>
								<a className='profe-enlace' href='#'>
									Ver más
								</a>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default Subject;
