// LoadingComponent.js

import React from 'react';

const LoadingComponent = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <div>
                <p>Cargando...</p>
                {/* Aquí puedes añadir una imagen o una animación de carga si lo prefieres */}
            </div>
        </div>
    );
};

export default LoadingComponent;
