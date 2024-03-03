import {useState} from 'react'
import './Anuncio.scss';

function Anuncio() {
  const [materia, setMateria] = useState('')
  const [titulo,setTitulo] = useState('')
  const [clase,setClase] = useState('')
  const [biografia,setBiografia] = useState('')


  const materias = ["Matemática","Guitarra","Inglés","Historia","Canto","Italiano"]

  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  const handleChange = (e) => {
    // Obtener el valor de la materia seleccionada y eliminar acentos
    const materiaSeleccionada = removeAccents(e.target.value.toLowerCase());
    setMateria(materiaSeleccionada);
  };

  const handleAnuncio = ()=> {
    const anuncio = {
      subject: materia,
      title: titulo,
      descriptionClass: clase,
      descriptionBiography: biografia
    }
    alert('Se creo correctamente el anuncio')
    console.log(anuncio)
  }

    return (
        <main className='anuncio' style={{ backgroundColor: '#f2f3fe' }}>
          <div className="anuncio-container">
          <h1>Elige la materia en la que quieras dar clases</h1>
            <div className="anuncio-materias">
              {materias.map(materia =>{
                return(
                  <div className="materia" key={materia}>
                  <label htmlFor="">{materia}</label>
                  <input type="checkbox" value={materia} onChange={handleChange} />
                </div>
                )
              })}
            </div>
            <div className="anuncio-seccion">
              <h1>Pon un título a tu aviso</h1>
              <textarea name="" 
              className='anuncio-titulo' 
              placeholder='Escribe aquí un título llamativo para tus estudiantes.'
              onChange={(e) => setTitulo(e.target.value)}
              ></textarea>
            </div>
            <div className="anuncio-seccion">
              <h1>Cuéntanos sobre las clases que deseas dar</h1>
              <textarea 
              name="" 
              className='anuncio-clase' 
              placeholder='Describe aquí tus clases y tu acercamiento cómo profesor.'
              onChange={(e) => setClase(e.target.value)}
              ></textarea>
            </div>
            <div className="anuncio-seccion">
              <h1>Cuéntanos sobre ti</h1>
              <textarea 
              name="" 
              className='anuncio-clase' 
              placeholder='Cuéntale a los estudiantes sobre ti, sobre tu historia académica y por qué deseas enseñar.'
              onChange={(e) => setBiografia(e.target.value)}
              >
              </textarea>
            </div>
            <button onClick={handleAnuncio}>Crear Anuncio</button>
          </div>
        </main>
    );
}

export default Anuncio;
