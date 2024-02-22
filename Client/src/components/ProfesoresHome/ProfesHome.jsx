import MatematicaHome from './Slides/MatematicaHome';
import './ProfesHome.scss';

function ProfesHome() {
	return (
		<section className='profes-container'>
			<h3>El lugar donde podés encontrar los mejores profesores en su área </h3>
			<MatematicaHome materia={'Matematica'} />
			<MatematicaHome materia={'Guitarra'} />
			<MatematicaHome materia={'Ingles'} />
		</section>
	);
}

export default ProfesHome;
