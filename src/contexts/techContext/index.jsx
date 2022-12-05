import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { instance } from '../../services/api';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [techs, setTechs] = useState([]);
    const [regisModal, setRegisModal] = useState(false);
    const [loading, setLoading] = useState(false);

    const createTechApi = async (data) => {
        try {
            setLoading(true);
            const response = await instance.post('/users/techs', data, {
                headers: { Authorization: `Bearer ${localStorage.userToken}` },
            });

            toast.success('Tecnologia cadastrada!');
            setTechs((old) => [...old, response.data]);
            setRegisModal(false);

        } catch (err) {
            toast.info('Tecnologia já cadastrada.');
            return err;
        } finally {
            setLoading(false);
        }
    };

    return (
        <TechContext.Provider value={{
            techs,
            setTechs,
            regisModal,
            setRegisModal,
            createTechApi,
            loading,
        }}>
            {children}
        </TechContext.Provider>
    );
};