import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Manzana from '../../assets/Manzana-card.svg';
import imagenDefault from '../../assets/imagen-de-perfil.jpg';
import { getAnuncio, getTeachersBySubject } from '../../redux/actions/actions';
import './Subject.scss';

function Subject() {
	const navigate = useNavigate();
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
		console.log(newMateria);
		dispatch(getTeachersBySubject(`${newMateria}`));
	}, []);

	function TextoConSuspensivos({ texto, longitudMaxima, ...props }) {
		if (texto.length > longitudMaxima) {
			return <p {...props}>{texto.slice(0, longitudMaxima)}...</p>;
		} else {
			return <p {...props}>{texto}</p>;
		}
	}
	const handleVerMas = (e, id, profesor) => {
		e.preventDefault();
		dispatch(getAnuncio(id, profesor));
		navigate(`/teacher-panel/${materia.toLowerCase()}/${id}`);
	};

	return (
		<section className='subject-container'>
			<h1>{materia}</h1>
			<div className='subject-card'>
				{PROFESORES?.map((profesor, index) => {
					let { id, imagePath, descriptionTeacher, name, lastname } = profesor;
					if (!descriptionTeacher) {
						descriptionTeacher = 'not found';
					}
					return (
						<div key={index} className='card-profe'>
							<img src={imagePath || imagenDefault} alt={`${name} imagen`} />
							<div className='card-profe-info'>
								<div className='valoracion'>
									<img src={Manzana} alt='Icono' />
									<p className='profe-valoracion'>{4.7}</p>
								</div>
								<h2 className='profe-nombre'>{`${name} ${lastname}`}</h2>
								<TextoConSuspensivos
									className='profe-descripcion'
									texto={descriptionTeacher}
									longitudMaxima={90}
								/>
								<p className='profe-clase'>{materia}</p>
								<a
									className='profe-enlace'
									onClick={(e) => handleVerMas(e, id, profesor)}
								>
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
