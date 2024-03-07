import styles from './About.module.css';

const aboutData = [
	{
		name: 'Cintia Coccia',
		linkedin: 'Enlace a LinkedIn del Compañero 1',
		description:
			'Breve descripción del Compañero 1 y su contribución al proyecto.',
	},
	{
		name: 'Daniel Villarraga',
		linkedin: 'Enlace a LinkedIn del Compañero 2',
		description:
			'Breve descripción del Compañero 2 y su contribución al proyecto.',
	},
	{
		name: 'Enzo Spadoni',
		linkedin: 'Enlace a LinkedIn del Compañero 2',
		description:
			'Breve descripción del Compañero 2 y su contribución al proyecto.',
	},
	{
		name: 'Franco Quenallata',
		linkedin: 'Enlace a LinkedIn del Compañero 2',
		description:
			'Breve descripción del Compañero 2 y su contribución al proyecto.',
	},
	{
		name: 'Henry Corredor',
		linkedin: 'Enlace a LinkedIn del Compañero 2',
		description:
			'Breve descripción del Compañero 2 y su contribución al proyecto.',
	},
	{
		name: 'Lucas Branchini',
		linkedin: 'Enlace a LinkedIn del Compañero 2',
		description:
			'Breve descripción del Compañero 2 y su contribución al proyecto.',
	},
	{
		name: 'María Belén Gonzalez Miramontes',
		linkedin: 'https://www.linkedin.com/in/bgmiramontes',
		description:
			'Desarrolladora Full Stack y Diseñadora Gráfico. Con experiencia en diseño gráfico y un papel integral en el proyecto, abordando aspectos como el diseño, la estilización, el home, el detalle de productos, el perfil del usuario y contribuyendo a la organización y creatividad.',
	},
	{
		name: 'Ofir Roque',
		linkedin: 'Enlace a LinkedIn del Compañero 2',
		description:
			'Breve descripción del Compañero 2 y su contribución al proyecto.',
	},
	// Repite esta estructura para cada compañero
];

const About = () => {
	return (
		<div className={styles.background}>
			<div className={styles.container}>
				<div className={styles.text}>
					<h2>Acerca de Nuestro Equipo</h2>
					<p>
						En 'Hops Market', somos un equipo diverso de ocho personas de tres
						países de América Latina, unidos por el propósito de crear una
						experiencia de compra de cerveza en línea excepcional como parte de
						nuestro proyecto final del bootcamp de Henry.
					</p>
					<h2>Nuestra Trayectoria</h2>
					<p>
						Seis de nosotros colaboramos previamente en un proyecto donde surgió
						la visión detrás de 'Hops Market'. Completamos el equipo con dos
						personas que compartían nuestra pasión y visión.
					</p>
					<h2>Nuestro Propósito</h2>
					<p>
						En 'Hops Market', nuestro objetivo es claro: ofrecer a los amantes
						de la cerveza una experiencia de compra en línea única y
						conveniente, aprovechando las tendencias actuales.
					</p>

					<h2>Relevancia en el Mercado</h2>
					<p>
						'Hops Market' es relevante en el contexto actual debido a la
						creciente pasión por la cerveza y el auge del comercio electrónico.
						Resolvemos la búsqueda de cervezas difíciles de conseguir. En
						resumen, en 'Hops Market', nos unimos para crear una experiencia
						excepcional de compra de cerveza en línea como parte de nuestro
						proyecto final del bootcamp de Henry, aprovechando las tendencias
						del mercado.
					</p>
				</div>
				<ul className={styles.cardContainer}>
					{aboutData.map((person, index) => (
						<div className={styles.card} key={index}>
							<h3>{person.name}</h3>
							<p className={styles.description}>{person.description}</p>
							<a
								href={person.linkedin}
								target='_blank'
								rel='noopener noreferrer'
							>
								Perfil de LinkedIn
							</a>
						</div>
					))}
				</ul>
			</div>
		</div>
	);
};

export default About;
