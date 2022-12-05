import { createContext, useState } from 'react';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [techs, setTechs] = useState([]);

    return (
        <TechContext.Provider value={{
            techs,
            setTechs,
        }}>
            {children}
        </TechContext.Provider>
    );
};