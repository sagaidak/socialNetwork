import React from 'react';
import {Field, reduxForm} from "redux-form";
import {userLogin, userLogout} from "../../redux/auth-reducer";
import {connect} from 'react-redux';
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";
import s from './Login.module.css';

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={'email'} component={Input}
                    validate={[required]}
            />
        </div>
        <div>
            <Field placeholder={"Password"} name={'password'} component={Input}
                   validate={[required]} type={"password"}
            />
        </div>
        <div>
            <Field type={"checkbox"} name={'rememberMe'} component={Input}

            /> remember me
        </div>
        {error &&
            <div className={s.form_summary_error}>
                {error}
            </div>
        }
        <div>
            <button>Login</button>
        </div>
    </form>

};

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.userLogin(formData.email, formData.password, formData.rememberMe);
    };

    if ( props.isAuth ) {
        return <Redirect to={'/profile'} />;
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );

};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, {userLogin})(Login);