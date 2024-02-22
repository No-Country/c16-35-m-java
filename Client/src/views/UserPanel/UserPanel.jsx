import React from 'react'
import './UserPanel.scss'

export const UserPanel = () => {
  return (
    < section className='panel-container'>
      <h4 className='titulo'>Mi perfil</h4>
      <div className='mi-perfil'>
        <div className='seccion'>
          <p>Información general</p>
          <form className='form-container'>
            <label>Nombre</label>
            <div className='form-input'>
              <input type="text" />
            </div>
            <label>Apellido</label>
            <div className='form-input'>
              <input type="text" />
            </div>
            <label>Email</label>
            <div className='form-input'>
              <input type="email" placeholder='Ejemplo@ejemplo.com' />
            </div>
            <label>Celular</label>
            <div className='form-input'>
              <input type="text" placeholder='Número de celular' />
            </div>
            <label>Usuario Skype</label>
            <div className='form-input'>
              <input type="text" />
            </div>
            <button className='btn-form'>Validar</button>
          </form>
        </div>
        <div className='seccion-2'>
          <p>Cargá tu DNI </p>
          <div className='dni-img'>
            <div>
              <img src="	https://c.superprof.com/static/img/id.a3f2729c.svg" />
            </div>
          </div>
          <label for="file-upload" class="btn-form">
            Seleccionar
          </label>
          <input id="file-upload" type="file" />

        </div>
        <div className='seccion-3'>
          <p>Foto de perfil</p>
          <div className='perfil'>
            <img className='avatar' src="	https://c.superprof.com/static/img/defaultAvatar.ed8fb74e.png" />
            <label for="file-upload" class="btn-form">
              Seleccionar
            </label>
            <input id="file-upload" type="file" />
          </div>
        </div>
      </div>
    </section>
  )
}
