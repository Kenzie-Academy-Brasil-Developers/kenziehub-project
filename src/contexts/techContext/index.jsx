import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { instance } from '../../services/api';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const [techs, setTechs] = useState([]);
    const [regisModal, setRegisModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [modalInfo, setModalInfo] = useState({});

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

    const deleteTechApi = async (techId) => {
        try {
            setLoading(true);
            await instance.delete(`/users/techs/${techId}`, {
                headers: { Authorization: `Bearer ${localStorage.userToken}` },
            });

            toast.success('Tecnologia deletada.');
            const updatedData = techs.filter(tech => tech.id !== techId);
            setTechs(updatedData);
            setEditModal(false);
            
        } catch (err) {
            toast.error('Erro ao deletar a tecnologia! Tente novamente.');
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
            deleteTechApi,
            setEditModal,
            editModal,
            loading,
            modalInfo,
            setModalInfo,
        }}>
            {children}
        </TechContext.Provider>
    );
};