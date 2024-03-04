import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './UserPanel.scss';

export default function UserPanel() {
	const [imageProfile, setImageProfile] = useState('');
	const [newImage, setNewImage] = useState('');
	const [name, setName] = useState('');
	const [lastname, setLastname] = useState('');
	const [birthday, setBirthday] = useState('');
	const [descriptionBiography, setDescriptionBiography] = useState('');
	const user = useSelector((state) => state.user);
	console.log(user.id);

	const actualizarImagenDePerfil = async (event) => {
		const imagenSeleccionada = event.target.files[0];

		const formData = new FormData();
		formData.append('file', imagenSeleccionada);
		formData.append('upload_preset', 'Images');

		await axios
			.post('https://api.cloudinary.com/v1_1/dxryietha/image/upload', formData)
			.then((response) => {
				const imageUrl = response.data.secure_url;
				setNewImage(imageUrl);
				console.log(imageUrl);
			})
			.catch((error) => {
				console.log('Error al cargar la imagen', error);
			});
	};

	useEffect(() => {
		axios
			.get(`https://c16-35-m-java.onrender.com/api/client/${user.id}`)
			.then((response) => {
				const data = response.data;
				setName(data.name);
				setLastname(data.lastname);
				setBirthday(data.birthday);
				setDescriptionBiography(data.descriptionBiography);
				setImageProfile(data.imagePath);
			})
			.catch((error) => {
				console.error('Error al obtener los datos del usuario:', error);
			});
	}, []);

	const handleChangeProfile = (event) => {
		event.preventDefault();

		const profileData = {
			name: name,
			lastname: lastname,
			birthday: birthday,
			descriptionBiography: descriptionBiography,
			imagePath: newImage,
		};
		console.log(newImage);
		// Realizar la solicitud PATCH al servidor
		axios
			.patch(
				`https://c16-35-m-java.onrender.com/api/client/${user.id}`,
				profileData,
			)
			.then(() => {
				console.log(profileData);
				alert('Se modificaron los datos');
			})
			.catch((error) => {
				console.error(error); // Mostrar el error en la consola
			});
	};

	return (
		<section className='panel-container'>
			<h4 className='titulo'>Mi perfil</h4>
			<div className='mi-perfil'>
				<div className='seccion'>
					<p>Información general</p>
					<form className='form-container' onSubmit={handleChangeProfile}>
						<label>Nombre</label>
						<div className='form-input'>
							<input
								type='text'
								name='name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<label>Apellido</label>
						<div className='form-input'>
							<input
								type='text'
								name='lastname'
								value={lastname}
								onChange={(e) => setLastname(e.target.value)}
							/>
						</div>
						<label>Cumpleaños</label>
						<div className='form-input'>
							<input
								type='date'
								name='birthday'
								value={birthday}
								onChange={(e) => setBirthday(e.target.value)}
							/>
						</div>
						<label>Biografía</label>
						<div className='form-input'>
							<textarea
								className='biografia'
								value={descriptionBiography}
								type='text'
								name='descriptionBiography'
								onChange={(e) => setDescriptionBiography(e.target.value)}
							/>
						</div>
						<button type='submit' className='btn-form'>
							Validar
						</button>
					</form>
				</div>
				<div className='seccion-3'>
					<p>Foto de perfil</p>
					<div className='perfil'>
						<img
							className='avatar'
							src={newImage || imageProfile}
							alt='Imagen de Perfil'
						/>
						<label htmlFor='file-upload' className='btn-form'>
							Seleccionar
						</label>
						<input
							id='file-upload'
							type='file'
							name='imagePath'
							onChange={actualizarImagenDePerfil}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
