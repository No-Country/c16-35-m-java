import { useEffect, useState } from 'react';
import axios from 'axios';
import './UserPanel.scss';

export const UserPanel = () => {
    const [imageProfile, setImageProfile] = useState(null);
    const [newImage, setNewImage] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [descriptionBiography, setDescriptionBiography] = useState('');

    const actualizarImagenDePerfil = (event) => {
      const imagenSeleccionada = event.target.files[0];
      setNewImage(imagenSeleccionada);

      const reader = new FileReader();
      reader.onload = () => {
          const base64String = reader.result;
          // Aquí puedes hacer algo con la cadena base64, como enviarla al servidor
          console.log(base64String);
      };
      reader.readAsDataURL(imagenSeleccionada);
  };

    useEffect(() => {
        axios.get('https://c16-35-m-java.onrender.com/api/client/1')
            .then((response) => {
                const data = response.data;
                setName(data.name);
                setLastname(data.lastname);
                setEmail(data.email);
                setPassword(data.password);
                setBirthday(data.birthday);
                setDescriptionBiography(data.descriptionBiography);
                setImageProfile(data.imagePath); // Asignar la imagen del perfil del backend
            })
            .catch((error) => {
                console.error('Error al obtener los datos del usuario:', error);
            });
    }, []);

    const handleChangeProfile = (event) => {
        event.preventDefault();

        // Crear un objeto con los datos del perfil
        const profileData = {
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            birthday: birthday,
            descriptionBiography: descriptionBiography,
            imagePath: newImage
        };

        // Realizar la solicitud PATCH al servidor
        axios.patch('https://c16-35-m-java.onrender.com/api/client/1', profileData)
            .then(() => {
                alert('Se modificaron los datos');
            })
            .catch(error => {
                console.error(error); // Mostrar el error en la consola
            });
    };

    return (
        <section className='panel-container'>
            <h4 className='titulo'>Mi perfil</h4>
            <div className='mi-perfil'>
                <div className='seccion'>
                    <p>Información general</p>
                    <form className='form-container' onSubmit={handleChangeProfile} >
                        <label>Nombre</label>
                        <div className='form-input'>
                            <input type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <label>Apellido</label>
                        <div className='form-input'>
                            <input type='text' name='lastname' value={lastname} onChange={(e) => setLastname(e.target.value)} />
                        </div>
                        <label>Email</label>
                        <div className='form-input'>
                            <input type='email' name='email' value={email} placeholder='Ejemplo@ejemplo.com' onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <label>Contraseña</label>
                        <div className='form-input'>
                            <input type='password' name='password' value={password} placeholder='*********' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <label>Cumpleaños</label>
                        <div className='form-input'>
                            <input type='date' name='birthday' value={birthday} onChange={(e) => setBirthday(e.target.value)} />
                        </div>
                        <label>Biografía</label>
                        <div className='form-input' >
                            <textarea className='biografia' value={descriptionBiography} type='text' name='descriptionBiography' onChange={(e) => setDescriptionBiography(e.target.value)} />
                        </div>
                        <button type='submit' className='btn-form'>Validar</button>
                    </form>
                </div>
                <div className='seccion-3'>
                    <p>Foto de perfil</p>
                    <div className='perfil'>
                    <img
                            className='avatar'
                            src={newImage ? URL.createObjectURL(newImage) : (imageProfile ? imageProfile : 'https://c.superprof.com/static/img/defaultAvatar.ed8fb74e.png')}
                            alt='Imagen de Perfil'
                        />
                        <label htmlFor='file-upload' className='btn-form'>
                            Seleccionar
                        </label>
                        <input id='file-upload' type='file' name='imagePath' onChange={actualizarImagenDePerfil} />
                    </div>
                </div>
            </div>
        </section>
    );
};



