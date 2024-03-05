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
		console.log(teacherDetail);
		window.scrollTo(0, 0);

	}, []);

	return <section>
        
		<img src={teacherDetail.imagePath} alt=""  style={{width:'15rem', marginTop:'5rem'}}/>

	</section>;
}

export default TeacherPanel;
