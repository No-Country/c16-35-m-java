import MatematicaHome from './Slides/MatematicaHome';
import './ProfesHome.scss'

function ProfesHome() {
  return (
    <section className='profes-container'>
      <p>El lugar donde podés encontrar los mejores profesores en su área </p>
      <MatematicaHome materia={'Matematica'} />
      <MatematicaHome materia={'Guitarra'} />
      <MatematicaHome materia={'Ingles'} />
    </section>
  );
}

export default ProfesHome;
