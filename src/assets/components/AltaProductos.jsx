import React from 'react'
import { useState, useEffect } from 'react';
import TablaProductos from '../components/TablaProductos';
import Modal from 'react-modal';
import "../css/style.css";


// Forma inicial del Producto
const initialForm = {
    id_Producto: null,
    Nombre: "",
    Descripcion: "",
    Precio: "",
    FechaAlta: "",
    Categoria: "",
  };

const AltaProductos = ({ createData, updateData, dataToEdit, setDataToEdit, deleteData, data}) => {
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
    
          if (!form.Nombre ||
              !form.Descripcion ||
              !form.Precio ||
              !form.FechaAlta ||
              !form.Categoria
             ) {
          alert("Datos incompletos");
          return;
        }
    
        if (form.id_Producto === null) {
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
    <TablaProductos  data={data} setDataToEdit={setDataToEdit} deleteData={deleteData} OpenModal={openModal}/>
    <div className="TablaPo">
      <input className="btn-Producto type1" type="button" value="Agregar Producto" onClick={openModal}></input>
      {/* Modal que cotienen el formulario */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Producto</h2>
        <form className='formRegistro' action="">
            <div className='formContent'>
                <div className='formGroup'>
                     <input type="text" name="Nombre" id="nombre" className='formInput' placeholder=""
                        onChange={handleChange} value={form.Nombre} />
                    <label for="Nombre" className='formLabel'>Nombre</label>
                    <span className='formLine'></span>
                </div>
                <div className='formGroup'>
                    <input type="text" name="Descripcion" id='descripcion' className='formInput' placeholder=''
                       onChange={handleChange} value={form.Descripcion}/>
                    <label for="Descripcion" className='formLabel'>Descripción</label>
                    <span className='formLine'></span>
                </div>
                <div className='formGroup'>
                    <input type="number" name='Precio' id='precio' className='formInput' placeholder=''
                       onChange={handleChange} value={form.Precio}/>
                    <label for="Precio" className='formLabel'>Precio</label>
                    <span className='formLine'></span>
                </div>
                <div className='formGroup'>
                    <input type="date" name='FechaAlta' id='fechaAlta' className='formInput' placeholder=''
                    onChange={handleChange} value={form.FechaAlta}/>
                    <label for="FechaAlta" className='formLabel'>Fecha Alta</label>
                    <span className='formLine'></span>
                </div>
                <div className='formGroup'>
                    <input type="text" name='Categoria' id='categoria' className='formInput' placeholder=''
                    onChange={handleChange} value={form.Categoria}/>
                    <label for="Categoria" className='formLabel'>Categoria</label>
                    <span className='formLine'></span>
                </div>
                <input type="submit" className='btn-Producto type1' value="Enviar" onClick={handleSubmit} />
            </div>
        </form>
        <input className="btn-Producto type1" type="button" value="Cerrar" onClick={closeModal}></input>
      </Modal>
    </div>
    </>
  )
}

export default AltaProductos