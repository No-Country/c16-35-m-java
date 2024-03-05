import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAnuncio } from '../../redux/actions/actions';
import Manzana from '../../assets/Manzana.svg'
import ManzanaItems from '../../assets/Manzana-card.svg'
import './TeacherPanel.scss';

function TeacherPanel() {
	const dispatch = useDispatch();
	const teacherDetail = useSelector((state) => state.teacherDetail);
	const { id } = useParams();
	const { imagePath, descriptionBiography, descriptionCurse, price, name, lastname, startHour, endHour} = teacherDetail

	useEffect(() => {
		dispatch(getAnuncio(id));
		console.log(teacherDetail);
		window.scrollTo(0, 0);

	}, []);

	return (
	<main style={{backgroundColor:'#f2f3fe', height:'100vh'}}>
    <div className="teacher-panel-container">
        <div className="teacher-panel-reserva">
		    <img src={imagePath} alt={name}/>
			<div className="teacher-panel-calificacion">
				<div className="calificacion" style={{display:'flex', alignItems:'center', justifyContent:'space-around'}}>
				    <p>Calificacion</p>
					<div className="valoracion" style={{display:'flex', alignItems:'center'}}>
						<p>4.7</p>
						<img src={Manzana} alt="" style={{width:'1.5rem', height:'1.5rem'}} />
					</div>
				</div>
				<div className="items" style={{width:'11rem', margin:'0 auto'}}>
				    <div className="calificacion" style={{display:'flex', alignItems:'center',justifyContent:'space-between', marginTop:'1rem'}}>
				        <p>Predisposición</p>
					    <div className="valoracion" style={{display:'flex', alignItems:'center'}}>
						    <p>4.7</p>
						    <img src={ManzanaItems} alt="" style={{width:'1.5rem', height:'1.5rem'}} />
					    </div>
				    </div>
				    <div className="calificacion" style={{display:'flex', alignItems:'center',justifyContent:'space-between', marginTop:'1rem'}}>
				        <p>Claridad</p>
					    <div className="valoracion" style={{display:'flex', alignItems:'center'}}>
						    <p>4.7</p>
						    <img src={ManzanaItems} alt="" style={{width:'1.5rem', height:'1.5rem'}} />
					    </div>
				    </div>	
				    <div className="calificacion" style={{display:'flex', alignItems:'center', justifyContent:'space-between',marginTop:'1rem'}}>
				        <p>Preparacion</p>
					    <div className="valoracion" style={{display:'flex', alignItems:'center'}}>
						    <p>4.7</p>
						    <img src={ManzanaItems} alt="" style={{width:'1.5rem', height:'1.5rem'}} />
					    </div>
				    </div>
				</div>
				<div className="panel-reserva">
					<p>Precio: ${price}</p>
					<button>Reservar clase</button>
				</div>
				
			</div>
		</div>
	    <div className="teacher-panel-text">
			<h1>{name}  {lastname}</h1>
			<div className='teacher-panel-speech'>
				<h2>Sobre mi</h2>
			    <p>{descriptionBiography}</p>
			</div>
			<div className='teacher-panel-speech'>
				<h2>Sobre la clase</h2>
				<p>{descriptionCurse}</p>
			</div>
			<div className='teacher-panel-speech'>
				<h2>Disponibilidad</h2>
				<p>Aquí puedes ver que día y horarios tiene {name} disponible para poder planificar mejor tu agenda y reservar la clase adecuada.</p>
				<p><strong>De lunes a viernes desde las {startHour}:00hs hasta las {endHour}:00hs</strong></p>
			</div>
	    </div>
    </div>
	</main>
	)
}

export default TeacherPanel;
