import React, { createContext, useContext, useState } from 'react';

// Creamos el contexto
const MenuContext = createContext();

// Hook personalizado para usar el contexto
export const useMenu = () => useContext(MenuContext);

// Proveedor del contexto
export const MenuProvider = ({ children }) => {
    const [isMenuLoading, setIsMenuLoading] = useState(true);

    return (
        <MenuContext.Provider value={{ isMenuLoading, setIsMenuLoading }}>
            {children}
        </MenuContext.Provider>
    );
};
