import React from 'react'
import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import TablaCategoria from './TablaCategoria';

// Forma inicial de la Categoria
const initialForm = {
    id_categoria: null,
    Tipo: "",
    CodigoCategoria: "",
    FechaAlta: "",
  };

const AltaCategorias = ({createData, updateData, dataToEdit, setDataToEdit, deleteData, data}) => {
    const [form, setForm] = useState(initialForm);

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
      }, [dataToEdit])

    // Cambio en los input del Formulario
    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setForm({
              ...form,
              Fotografia: e.target.files[0] ? e.target.files[0].name : '', 
            });
          } else {
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            });
          }
    };

     // Envio de formulario
    const handleSubmit = (e) => {
        e.preventDefault();
    
          if (!form.Tipo ||
              !form.CodigoCategoria ||
              !form.FechaAlta 
             ) {
          alert("Datos incompletos");
          return;
        }
    
        if (form.id_categoria === null) {
          createData(form);
        } else {
          updateData(form);
        }
          
        handleReset();
        closeModal();
    };

    // Poner en blanco el formulario 
    const handleReset = () => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    // Estilo del Modal del Formulario
     const customStyles = {
        content: {
          width:"600px",
          height:"700px",
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          textAlign:"center",
        },
    };

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

     // Abre el Modal
     function openModal() {
        setIsOpen(true);
    }
    
    function afterOpenModal() {
        subtitle.style.color = 'black';
    }
    
    // Cierra el Modal y Manda a su forma inical el Formulario
    function closeModal() {
        setIsOpen(false);
        setForm(initialForm);
    }

    return (
     <>
      {/* Tabla que muestra los productos */}
      <TablaCategoria data={data} setDataToEdit={setDataToEdit} deleteData={deleteData} OpenModal={openModal}/>
      <div className="TablaPo">
        <input className="btn-Producto type1" type="button" value="Agregar Categoria" onClick={openModal}></input>
        {/* Modal que cotienen el formulario */}
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
           >
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Categoria</h2>
            <form className='formRegistro' action="">
                <div className='formContent'>
                    <div className='formGroup'>
                        <input type="text" name="Tipo" id="tipo" className='formInput' placeholder=""
                            onChange={handleChange} value={form.Tipo} />
                        <label for="Nombre" className='formLabel'>Tipo</label>
                        <span className='formLine'></span>
                    </div>
                    <div className='formGroup'>
                        <input type="text" name="CodigoCategoria" id='codigoCategoria' className='formInput' placeholder=''
                        onChange={handleChange} value={form.CodigoCategoria}/>
                        <label for="Descripcion" className='formLabel'>Codigo Categoria</label>
                        <span className='formLine'></span>
                    </div>
                    <div className='formGroup'>
                        <input type="date" name='FechaAlta' id='fechaAlta' className='formInput' placeholder=''
                        onChange={handleChange} value={form.FechaAlta}/>
                        <label for="FechaAlta" className='formLabel'>Fecha Alta</label>
                        <span className='formLine'></span>
                    </div>
                    <input type="submit" className='btn-Producto type1' value="Enviar" onClick={handleSubmit} />
                </div>
            </form>
            <input className="btn-Producto type1" type="button" value="Cerrar" onClick={closeModal}></input>
          </Modal>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
            integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
            crossorigin="anonymous"
            referrerpolicy="no-referrer"></script>
        </div>
     
     </>
  )
}

export default AltaCategorias