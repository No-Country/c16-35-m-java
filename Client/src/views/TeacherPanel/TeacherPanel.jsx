import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnuncio } from '../../redux/actions/actions';
import './TeacherPanel.scss';

function TeacherPanel() {
	const dispatch = useDispatch();
	const teacherDetail = useSelector((state) => state.teacherDetail);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getAnuncio(id));
		window.scrollTo(0, 0);
		console.log('-------------');
		console.log(teacherDetail);
	}, []);

	return <section></section>;
}

export default TeacherPanel;
