import { createContext, useState } from 'react';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [techs, setTechs] = useState([]);
    const [regisModal, setRegisModal] = useState(false);

    return (
        <TechContext.Provider value={{
            techs,
            setTechs,
            regisModal,
            setRegisModal,
        }}>
            {children}
        </TechContext.Provider>
    );
};