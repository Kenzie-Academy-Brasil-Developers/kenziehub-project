import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { instance } from '../../services/api';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        setUser({});
        localStorage.clear();
    };

    const requestLoginApi = async (data) => {
        try {
            setLoading(true);
            const response = await instance.post('/sessions', data);

            toast.success('Login efetuado com sucesso!');

            localStorage.setItem('userToken', response.data.token);
            localStorage.setItem('userId', response.data.user.id);

            setUser(response.data.user);
            navigate('/dashboard');

        } catch (err) {
            toast.error('Ops! Algo deu errado');
            return err;
        } finally {
            setLoading(false);
        }
    };

    const requestRegisterApi = async (data) => {
        try {
            setLoading(true);
            delete data.confirmPwd;
            await instance.post('/users', data);

            toast.success('Conta criada com sucesso!');
            navigate('/');

        } catch (err) {
            toast.error('Ops! Algo deu errado');
            return err;
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserContext.Provider value={{
            user,
            setUser,
            loading,
            setLoading,
            handleLogout,
            requestLoginApi,
            requestRegisterApi,
        }}>
            {children}
        </UserContext.Provider>
    );
};
