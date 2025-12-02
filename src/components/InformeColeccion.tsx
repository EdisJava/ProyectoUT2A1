import React from 'react';
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from '@material-table/exporters';

interface InformeColeccionProps {
    data: any[];
}

const InformeColeccion: React.FC<InformeColeccionProps> = ({ data }) => {
    const columns = [
        { title: 'Nombre', field: 'nombre' },
        { title: 'Marca', field: 'marca' },
        { title: 'Tipo', field: 'tipo' },
        { title: 'Precio', field: 'precio', type: 'numeric' as const },
    ];

    // Calculate sum of prices
    const totalPrice = data.reduce((sum, item) => sum + (Number(item.precio) || 0), 0);

    return (
        <div style={{ maxWidth: '100%', padding: '20px' }}>
            <MaterialTable
                title={`Informe de Colección (Total Precio: ${totalPrice.toFixed(2)} €)`}
                columns={columns}
                data={data}
                options={{
                    draggable: true,
                    columnsButton: true,
                    filtering: true,
                    exportMenu: [
                        {
                            label: 'Export PDF',
                            exportFunc: (cols, datas) => ExportPdf(cols, datas, 'InformeColeccion'),
                        },
                        {
                            label: 'Export CSV',
                            exportFunc: (cols, datas) => ExportCsv(cols, datas, 'InformeColeccion'),
                        },
                    ],
                    headerStyle: {
                        backgroundColor: '#01579b',
                        color: '#FFF',
                    },
                    rowStyle: {
                        backgroundColor: '#EEE',
                    },
                }}
                localization={{
                    toolbar: {
                        exportTitle: 'Exportar',
                        showColumnsTitle: 'Mostrar Columnas',
                        addRemoveColumns: 'Agregar/Quitar Columnas',
                    },
                    header: {
                        actions: 'Acciones',
                    },
                    body: {
                        emptyDataSourceMessage: 'No hay datos para mostrar',
                        filterRow: {
                            filterTooltip: 'Filtrar',
                        },
                    },
                }}
            />
        </div>
    );
};

export default InformeColeccion;
