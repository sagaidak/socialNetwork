import React from 'react';
import s from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

    return (
        <div>

            <Paginator {...props} />
            {
                props.users.map(u => <User key={u.id}
                                           user={u}
                                           followingInProgress={props.followingInProgress}
                                           unfollowThunk={props.unfollowThunk}
                                           followThunk={props.followThunk}

                />)
            }
        </div>
    )
};

export default Users;