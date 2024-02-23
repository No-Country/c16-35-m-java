import Manzana from '../../assets/Manzana.svg'
import { OPINIONES } from '../../data-profesores';
import './OpinionesHome.scss';
function OpinionesHome() {
	return (
		<section className='opiniones-home-container'>
			<h3>Quienes eligieron confiar </h3>
			<div className='opiniones-home'>
				{OPINIONES.map((opinion, index) => {
					const { nombre, materia, valoracion, alumno, reseña } = opinion;
					return (
						<div key={index} className='opinion-home-card'>
							<div className='card-docente'>
								<div className='info-card'>
									<p>{nombre}-</p>
									<p>Profe de {materia}</p>
								</div>
								<div className='card-home-valoracion'>
									<img src={Manzana} alt='Manzana' />
									<p className='valoracion'>{valoracion}</p>
								</div>
							</div>
							<p className='card-home-reseña'>{reseña}</p>
							<p className='card-home-alumno'>{alumno}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
}

export default OpinionesHome;
