import useForm from '../hooks/formHooks';
import { useUserContext } from '../hooks/contextHooks';

const LoginForm = () => {
    const { handleLogin } = useUserContext();

    const initValues = {
        username: '',
        password: '',
    };

    const doLogin = () => {
        handleLogin(inputs);
    };

    const { inputs, handleInputChange, handleSubmit } =
        useForm(doLogin, initValues);

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    type="text"
                    onChange={handleInputChange}
                />
                <input
                    name="password"
                    type="password"
                    onChange={handleInputChange}
                />
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default LoginForm;