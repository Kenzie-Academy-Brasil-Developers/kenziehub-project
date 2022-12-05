import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { instance } from '../../services/api';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [techs, setTechs] = useState([]);

    const navigate = useNavigate();

    const handleLogout = () => {
        setUser({});
        localStorage.clear();
    };

    const requestLoginApi = async (formData) => {
        try {
            setLoading(true);
            const { data } = await instance.post('/sessions', formData);

            toast.success('Login efetuado com sucesso!');

            localStorage.setItem('userToken', data.token);
            localStorage.setItem('userId', data.user.id);

            setUser(data.user);
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

    useEffect(() => {
        const requestUserData = async () => {
            try {
                if (localStorage.userToken) {
                    navigate('/dashboard');
                    const { data } = await instance.get('/profile', {
                        headers: { Authorization: `Bearer ${localStorage.userToken}` },
                    });

                    setUser(data);
                    setTechs(data.techs);
                } 

            } catch (err) {
                localStorage.clear();
                return err;
            }
        };
        requestUserData();
    }, [navigate]);

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
