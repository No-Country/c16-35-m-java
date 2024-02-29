import ImagenHero from '../../assets/Imagen-hero.png';
import Lupa from '../../assets/Lupa input.svg'
import './Hero.scss';

export default function Hero() {
	return (
		<>
			<section className='hero'>
				<div className='contenido-hero'>
					<div className='hero-texto'>
						<p>Tu casa,</p>
						<p>tu clase,</p>
						<p>tus horarios.</p>
					</div>
					<img src={ImagenHero} alt='Imagen del hero' />
				</div>
        <div className="hero-buscador">
          <input type="text" placeholder='¿Qué quieres aprender hoy?' />
          <img src={Lupa} alt="Icono de Lupa" />
        </div>
			</section>
		</>
	);
}
