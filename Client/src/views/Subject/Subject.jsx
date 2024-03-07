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
	return (
		<section className='subject-container'>
			<h1>{materia}</h1>
			<div className='subject-card'>
				{PROFESORES.map((profesor) => {
					const { imagen, descripcion, nombre, clase, valoracion } = profesor;
					return (
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
					);
				})}
			</div>
		</section>
	);
}

export default Subject;
