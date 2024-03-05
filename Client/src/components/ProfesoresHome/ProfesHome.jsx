import './ProfesHome.scss';
import MatematicaHome from './Slides/MatematicaHome';

function ProfesHome() {
	return (
		<section className='profes-container'>
			<h3 className='profeshome-titulo'>
				El lugar donde podés encontrar los mejores profesores en su área{' '}
			</h3>
			<MatematicaHome materia={'Matematica'} />
			<MatematicaHome materia={'Guitarra'} />
			<MatematicaHome materia={'Ingles'} />
		</section>
	);
}

export default ProfesHome;
