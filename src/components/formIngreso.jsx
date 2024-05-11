import React, { useState } from 'react';
import { Select, Input, Button, Modal } from 'antd';
const { TextArea } = Input;
import '../styles/formIngreso.css'
const Formulario = () => {
  const [isOpenModal, setOpen] = useState(true);
  const [camposInvalidos, setCamposInvalidos] = useState({});
  const handleSubmit = () => {

  }
  // Estilos validación de campos
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
    <Modal
      title="Alta de artículos"
      centered
      open={isOpenModal}
      footer={[
        <Button key="back" onClick={() => setOpen(false)}>
          Regresar
        </Button>,
        <Button key="submit" onClick={handleSubmit} type="primary">
          Agregar
        </Button>
      ]}
      onCancel={() => setOpen(false)}
      width={1100}
    >
      <form id='form_registro' onSubmit={handleSubmit}>
        <div className='contenedor1'>
          <fieldset className='fs-categoria'>
            <legend>Categoría</legend>
            <label htmlFor="categoria">Categoría del artículo</label>
            <Select
              id='categoria'
              className='select'
              placement="bottomLeft"
              placeholder="Seleccionar"
              variant="borderless"
              required
              options={[
                { value: 'mobiliario', label: <span>Mobiliario</span> },
                { value: 'electronico', label: <span>Electrónico</span> },
              ]}
            />
          </fieldset>

          <fieldset className='fs-ubicacion'>
            <legend>Ubicación</legend>
            <label htmlFor="espacio">Espacio</label>
            <Select
              id='espacio'
              className='select'
              placeholder="Seleccionar"
              variant="borderless"
              required
              options={[
                { value: '1', label: 'Opcion1' },
                { value: '2', label: 'Opcion2' },
                { value: '3', label: 'Opcion3' },
              ]}
            />
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
              <input type="text" name="" id="num_serie" required onChange={handleInput} onBlur={handleInput} className={camposInvalidos['num_serie'] ? 'invalido' : ''} />
              <label htmlFor="num_serie" className={camposInvalidos['num_serie'] ? 'invalido' : ''}>Número de serie</label>
            </div>

            <div className='txt-area'>
              <label htmlFor="descripcion">Descripción</label>
              <TextArea
                id='descripcion'
                autoSize={{
                  minRows: 3,
                  maxRows: 5,
                }}
              />

            </div>


            <div className='estado'>
              <label className='titulo-estado' htmlFor="estado">Estado</label>
              <div className="radiobtn">
                <input type="radio" id='danado' name='estado' />
                <label htmlFor="danado">Dañado</label>
              </div>
              <div className="radiobtn">
                <input type="radio" id='funcional' name='estado' />
                <label htmlFor="funcional" >Funcional</label>
              </div>
              <div className="radiobtn">
                <input type="radio" id='nuevo' name='estado' />
                <label htmlFor="nuevo">Nuevo</label>
              </div>
            </div>

            <div className='entrada'>
              <input type="text" name="" id="codigo" required onChange={handleInput} onBlur={handleInput} className={camposInvalidos['codigo'] ? 'invalido' : ''} />
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
              <Select
                id='color'
                className='select'
                placement="bottomLeft"
                placeholder="Seleccionar"
                variant="borderless"
                required
                options={[
                  { value: 'negro', label: <span>Negro</span> },
                  { value: 'blanco', label: <span>Blanco</span> },
                  { value: 'gris', label: <span>Gris</span> },
                  { value: 'azul', label: <span>Azul</span> },
                  { value: 'cafe', label: <span>Café</span> },
                  { value: 'rojo', label: <span>Rojo</span> },
                  { value: 'verde', label: <span>Verde</span> },
                ]}
              />
            </div>

            <div className='item5'>
              <label htmlFor="material">Material</label>
              <Select
                id='material'
                className='select'
                placement="bottomLeft"
                placeholder="Seleccionar"
                variant="borderless"
                required
                options={[
                  { value: 'negro', label: <span>Madera</span> },
                  { value: 'blanco', label: <span>Plástico</span> },
                  { value: 'gris', label: <span>Aluminio</span> },
                  { value: 'azul', label: <span>Acero</span> },
                  { value: 'cafe', label: <span>Tela</span> }
                ]}
              />
            </div>


          </fieldset>
        </div>
      </form>
    </Modal>

  );
}

export default Formulario;