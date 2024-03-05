import { useState } from 'react';
import { useSelector } from 'react-redux';
import './Anuncio.scss';

function Anuncio() {
	const user = useSelector((state) => state.user);
	const [anuncio, setAnuncio] = useState({
		subject: '',
		descriptionCurse: '',
	});
	console.log(user);

	const materias = [
		'Matematica',
		'Guitarra',
		'Ingles',
		'Historia',
		'Canto',
		'Italiano',
	];

	console.log(anuncio);

	const removeAccents = (str) => {
		return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	};

	const handleCheckboxChange = (e) => {
		const nuevaMateriaSeleccionada = e.target.value;
		setAnuncio((prevAnuncio) => ({
			...prevAnuncio,
			subject: removeAccents(nuevaMateriaSeleccionada),
		}));
	};

	const handleAnuncio = () => {
		alert('Se creó correctamente el anuncio');
		console.log(anuncio);
	};

	return (
		<main className='anuncio' style={{ backgroundColor: '#f2f3fe' }}>
			<div className='anuncio-container'>
				<h1>Elige la materia en la que quieras dar clases</h1>
				<div className='anuncio-materias'>
					{materias.map((materia) => (
						<div className='materia' key={materia}>
							<label>{materia}</label>
							<input
								type='checkbox'
								name='materia'
								value={materia}
								onChange={handleCheckboxChange}
								checked={anuncio.subject == materia}
							/>
						</div>
					))}
				</div>
				<div className='anuncio-seccion'>
					<h1>Cuéntanos sobre las clases que deseas dar</h1>
					<textarea
						name=''
						className='anuncio-clase'
						placeholder='Describe aquí tus clases y tu acercamiento cómo profesor.'
						onChange={(e) =>
							setAnuncio({ ...anuncio, descriptionCurse: e.target.value })
						}
					></textarea>
				</div>
				<button onClick={handleAnuncio}>Crear Anuncio</button>
			</div>
		</main>
	);
}

export default Anuncio;
