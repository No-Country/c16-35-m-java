import MatematicaHome from './Slides/MatematicaHome';
import './ProfesHome.scss';

function ProfesHome() {
	return (
		<section className='profes-container'>
			<h3 className='profeshome-titulo'>El lugar donde podés encontrar los mejores profesores en su área </h3>
			<MatematicaHome materia={'Matemáticas'} />
			<MatematicaHome materia={'Guitarra'} />
			<MatematicaHome materia={'Inglés'} />
		</section>
	);
}

export default ProfesHome;
