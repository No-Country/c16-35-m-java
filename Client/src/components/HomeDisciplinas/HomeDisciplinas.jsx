import { DISCIPLINAS } from '../../data-profesores';
import { useNavigate } from 'react-router-dom';
import './HomeDisciplinas.scss';

function HomeDisciplinas() {
	const navigate = useNavigate();
	const handleSubject = (materia) => {
		navigate(`/materia/${materia.toLowerCase()}`);
	};
	return (
		<section className='disciplinas-home-container'>
			<h3>Otras clases que puedes tener </h3>
			<div className='disciplinas-home'>
				<div className='disciplinas-col'>
					{DISCIPLINAS.slice(0, 5).map((disciplina, index) => {
						const { materia } = disciplina;
						return (
							<button onClick={() => handleSubject(materia)} key={index}>
								{materia}
							</button>
						);
					})}
				</div>
				<div className='disciplinas-col'>
					{DISCIPLINAS.slice(5, 10).map((disciplina, index) => {
						const { materia } = disciplina;
						return (
							<button
								onClick={() => handleSubject(materia)}
								key={index + 5}
								to={'/'}
							>
								{materia}
							</button>
						);
					})}
				</div>
				<div className='disciplinas-col'>
					{DISCIPLINAS.slice(10, 13).map((disciplina, index) => {
						const { materia } = disciplina;
						return (
							<button
								onClick={() => handleSubject(materia)}
								key={index + 10}
								to={'/'}
							>
								{materia}
							</button>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default HomeDisciplinas;
