import useForm from '../hooks/formHooks';

const LoginForm = () => {
    const initValues = {
        username: '',
        password: '',
    };

    const doLogin = () => {
        console.log(inputs);
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
const doLogin = () => {
    console.log(inputs);
};
export default LoginForm;