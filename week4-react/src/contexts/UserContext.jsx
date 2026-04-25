import { createContext, useState } from 'react';
import { useNavigate } from 'react-router';

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const handleLogin = async (credentials) => {
        try {
            console.log(credentials);

            // пока без API
            const fakeUser = {
                username: credentials.username,
            };

            localStorage.setItem('token', '123'); // fake token
            setUser(fakeUser);
            navigate('/');
        } catch (e) {
            console.log(e.message);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    };

    const handleAutoLogin = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            setUser({ username: 'autoUser' });
        }
    };

    return (
        <UserContext.Provider
            value={{ user, handleLogin, handleLogout, handleAutoLogin }}
        >
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };