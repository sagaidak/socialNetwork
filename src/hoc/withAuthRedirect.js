import React from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if ( this.props.isAuth === false ) return <Redirect to={'/login'} />

            return <Component {...this.props}/>
        }
    }

    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    });

    return connect(mapStateToProps, {})(RedirectComponent);
};