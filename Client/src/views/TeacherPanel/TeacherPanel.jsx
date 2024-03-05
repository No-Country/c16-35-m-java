import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnuncio } from '../../redux/actions/actions';
import './TeacherPanel.scss';

function TeacherPanel() {
	const dispatch = useDispatch();
	const teacherDetail = useSelector((state) => state.teacherDetail);
	const { id } = useParams();
	const { imagePath, descriptionBiography, descriptionCurse, descriptionTeacher, price, name, lastname} = teacherDetail

	useEffect(() => {
		dispatch(getAnuncio(id));
		console.log(teacherDetail);
		window.scrollTo(0, 0);

	}, []);

	return (
	<main style={{backgroundColor:'#f2f3fe', height:'100vh'}}>
    <div className="teacher-panel-container">
      <img src={imagePath} alt=""  style={{width:'15rem', marginTop:'5rem'}}/>
      <p>{descriptionBiography}</p>
		  <p style={{marginTop:'4rem'}}>{descriptionCurse}</p>
		  <p style={{marginTop:'4rem'}}>{descriptionTeacher}</p>
		  <p style={{marginTop:'4rem'}}>${price}</p>
		  <p style={{marginTop:'4rem'}}>{name} {lastname}</p>
    </div>

	</main>
	)
}

export default TeacherPanel;
