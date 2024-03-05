import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachersBySubject } from '../../redux/actions/actions';
import './ProfesHome.scss';
import MatematicaHome from './Slides/MatematicaHome';

function ProfesHome() {
	const dispatch = useDispatch();
	const allTeachers = useSelector((state) => state.allTeachers);
	console.log(allTeachers);

	useEffect(() => {
		dispatch(getTeachersBySubject('matematica'));
		dispatch(getTeachersBySubject('guitarra'));
		dispatch(getTeachersBySubject('ingles'));
	}, []);
	return (
		<section className='profes-container'>
			<h3 className='profeshome-titulo'>
				El lugar donde podés encontrar los mejores profesores en su área{' '}
			</h3>
			<MatematicaHome
				materia={'Matematica'}
				teachers={allTeachers.matematica}
			/>
			<MatematicaHome materia={'Guitarra'} teachers={allTeachers.guitarra} />
			<MatematicaHome materia={'Ingles'} teachers={allTeachers.ingles} />
		</section>
	);
}

export default ProfesHome;
