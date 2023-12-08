import React from 'react'
import DataTable from "react-data-table-component";

const TablaCategoria = ({data, setDataToEdit, deleteData,  OpenModal}) => {
  
  //Estilo del DataTable
  const customStyles = {
    table: {
        style: {
            color: "#092635",
        },
    },
    rows: {
        style: {
            borderBottomStyle: 'solid',
            minHeight: '72px', // override the row height
        },
    },
    headCells: {
        style: {
            borderBottomStyle: 'solid',
            fontSize: '15px',
            color: "#F0ECE5",
            backgroundColor: "#662549",
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
        },
        draggingStyle: {
            cursor: 'move',
        },
    },
    tableWrapper: {
    style: {
        display: 'table',
    },
},
    cells: {
        style: {
            display:"flex",
            justifyContent:"center",
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
        },
    },
};

// Encabezados de la Tabla Categorias
const Headers = [
    { name: "Tipo", selector: "Tipo", sortable: true },
    { name: "CodigoCategoria", selector: "CodigoCategoria", sortable: true },
    { name: "Fecha Alta", selector: "FechaAlta", sortable: true },
  ]

 // Función que trae los datos del renglon a editar y abre el Modal del Formulario
const Edit = (row) => {
    setDataToEdit(row);
    OpenModal();
}

// Botones de Eliminar y Editar
  const columnsPermission = [
    ...Headers,
   {
     name: "Acciones",
     cell: (row) => (
       <div>
         <button className="btn-editar" onClick={() => Edit(row)}>
           Editar
         </button>
         <button className="btn-eliminar" onClick={() => deleteData(row.id_categoria)}>
           Eliminar
         </button>
       </div>
     ),
     ignoreRowClick: true,
   },
 ];

// Lleva las columnas y los botones de la tabla
 const columns = columnsPermission;

    return (
        <div className="TablaPo">
        <DataTable
            columns={columns}
            data={data}
            highlightOnHover
            pointerOnHover
            responsive
            selectableRows
            selectableRowsHighlight
            customStyles={customStyles} 
        />
       </div>
  )
}

export default TablaCategoria