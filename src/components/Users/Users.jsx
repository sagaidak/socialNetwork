import React from 'react';
import s from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

    return (
        <div>

            <Paginator totalUsersCount={props.totalUsersCount}
                       pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
            />
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