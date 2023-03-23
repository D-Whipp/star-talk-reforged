import { Fragment } from 'react';

import './login.styles.scss';

const Login = () => {
    return (
        <Fragment>
            <form className='form-container'>
                <label className='label-item'>
                    email:
                    <input type="text" name="name" />
                </label>
                <label className='label-item'>
                    password:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </Fragment>
    );
};

export default Login;
