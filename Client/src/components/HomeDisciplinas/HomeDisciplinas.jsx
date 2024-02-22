import { Link } from 'react-router-dom';
import { DISCIPLINAS } from '../../data-profesores';
import './HomeDisciplinas.scss';

function HomeDisciplinas() {
	return (
		<section className='disciplinas-home-container'>
			<h3>Todas las disciplinas </h3>
			<div className='disciplinas-home'>
				<div className='disciplinas-col'>
					{DISCIPLINAS.slice(0, 5).map((disciplina, index) => {
						const { materia } = disciplina;
						return (
							<Link key={index} to={'/'}>
								{materia}
							</Link>
						);
					})}
				</div>
				<div className='disciplinas-col'>
					{DISCIPLINAS.slice(5, 10).map((disciplina, index) => {
						const { materia } = disciplina;
						return (
							<Link key={index + 5} to={'/'}>
								{materia}
							</Link>
						);
					})}
				</div>
				<div className='disciplinas-col'>
					{DISCIPLINAS.slice(10, 13).map((disciplina, index) => {
						const { materia } = disciplina;
						return (
							<Link key={index + 10} to={'/'}>
								{materia}
							</Link>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default HomeDisciplinas;
