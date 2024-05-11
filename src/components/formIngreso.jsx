import React, { useState } from 'react';
import '../styles/formIngreso.css'
const Formulario = () => {
  const [camposInvalidos, setCamposInvalidos] = useState({});
  // Validar campos (estilos)
  const handleInput = (event) => {
    const campoId = event.target.id;
    const nuevoEstado = { ...camposInvalidos };

    if (!event.target.validity.valid) {
      nuevoEstado[campoId] = true;
    } else {
      delete nuevoEstado[campoId];
    }

    setCamposInvalidos(nuevoEstado);
  }
  return (
    <form id='form_registro'>
      <div className='contenedor1'>
        <fieldset className='fs-categoria'>
          <legend>Categoría</legend>
          <label htmlFor="categoria">Categoría del artículo</label>
          <select name="" id="categoria" required>
            <option value="" hidden>Seleccionar</option>
            <option value="">Mobiliario</option>
            <option value="">Electrónico</option>
          </select>
        </fieldset>

        <fieldset className='fs-ubicacion'>
          <legend>Ubicación</legend>
          <label htmlFor="espacio">Espacio</label>
          <select name="" id="espacio" required>
            <option value="" hidden>Seleccionar</option>
            <option value="">Opcion1</option>
            <option value="">Opcion2</option>
          </select>
        </fieldset>

        <fieldset className='fs-precio'>
          <legend>Precio</legend>
          <div className='entrada'>
            <input type="number" name="" id="precio" required onChange={handleInput} onBlur={handleInput} className={camposInvalidos['precio'] ? 'invalido' : ''} />
            <label htmlFor="precio" className={camposInvalidos['precio'] ? 'invalido' : ''}>Precio $</label>
          </div>
        </fieldset>
      </div>

      <div className='contenedor2'>
        <fieldset className='fs-inf-gral'>
          <legend className='leyenda'>Información General del Artículo</legend>
          <div className='entrada'>
            <input type="text" id='nombre' required onChange={handleInput} onBlur={handleInput} className={camposInvalidos['nombre'] ? 'invalido' : ''} />
            <label htmlFor="nombre" className={camposInvalidos['nombre'] ? 'invalido' : ''}>Nombre</label>
          </div>
          <div className='entrada'>
            <input type="text" name="" id="num_serie" required onChange={handleInput} onBlur={handleInput} className={camposInvalidos['num_serie'] ? 'invalido' : ''}/>
            <label htmlFor="num_serie" className={camposInvalidos['num_serie'] ? 'invalido' : ''}>Número de serie</label>
          </div>

          <div className='txt-area'>
            <label htmlFor="descripcion">Descripción</label>
            <textarea name="" id="descripcion" placeholder='Descripción' />
          </div>


          <div className='estado'>
            <label htmlFor="estado">Estado</label>
            <input type="radio" id='danado' name='estado' />
            <label htmlFor="danado" className='lbl-inline'>Dañado</label>

            <input type="radio" id='funcional' name='estado' />
            <label htmlFor="funcional" className='lbl-inline'>Funcional</label>

            <input type="radio" id='nuevo' name='estado' />
            <label htmlFor="nuevo" className='lbl-inline'>Nuevo</label>
          </div>

          <div className='entrada'>
            <input type="text" name="" id="codigo" required onChange={handleInput} onBlur={handleInput} className={camposInvalidos['codigo'] ? 'invalido' : ''}/>
            <label htmlFor="codigo" className={camposInvalidos['codigo'] ? 'invalido' : ''}>Código</label>
          </div>
        </fieldset>

        <fieldset className='fs-opcional'>
          <legend>Información Opcional</legend>

          <div className='item1'>
            <div className='entrada-opc'>
              <input type="text" id='posicion' placeholder='' />
              <label htmlFor="posicion">Posición</label>
            </div>
          </div>
          <div className='item2'>
            <div className='entrada-opc'>
              <input type="text" name="" id="dimensiones" placeholder='' />
              <label htmlFor="dimensiones">Dimensiones</label>
            </div>
          </div>

          <div className='item3'>
            <div className="entrada-opc">
              <input type="text" name="" id="marca" placeholder='' />
              <label htmlFor="marca">Marca</label>
            </div>
          </div>
          <div className='item4'>
            <label htmlFor="color">Color</label>
            <select name="" id="color">
              <option value="" hidden>Seleccionar</option>
              <option value="">Blanco</option>
              <option value="">Negro</option>
              <option value="">Gris</option>
              <option value="">Café</option>
              <option value="">Azul</option>
              <option value="">Rojo</option>
            </select>
          </div>

          <div className='item5'>
            <label htmlFor="material">Material</label>
            <select name="" id="material">
              <option value="" hidden>Seleccionar</option>
              <option value="">Madera</option>
              <option value="">Plástico</option>
              <option value="">Aluminio</option>
              <option value="">Metal</option>
              <option value="">Tela</option>
            </select>
          </div>


        </fieldset>
      </div>
    </form>
  );
}

export default Formulario;