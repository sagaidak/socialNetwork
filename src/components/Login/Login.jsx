import React from 'react';
import {Field, reduxForm} from "redux-form";
import {userLogin} from "../../redux/auth-reducer";
import {connect} from 'react-redux';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={'email'} component={'input'}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={'password'} component={'input'}/>
        </div>
        <div>
            <Field type={"checkbox"} name={'rememberMe'} component={'input'}/> remember me
        </div>
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

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.isAuth
});
export default connect(mapStateToProps, {userLogin})(Login);