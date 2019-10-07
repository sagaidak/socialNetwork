import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, followThunk, unfollowThunk}) => {

    return (
        <div>
            <span>
              <div>
                  <NavLink to={'/profile/' + user.id}>
                  <img
                      src={user.photos.small || "https://im0-tub-ua.yandex.net/i?id=dd2cf00050c2bdee7367b812138f0038&n=33&w=240&h=150"}
                      alt="" className={s.userPhoto}/>
                  </NavLink>
              </div>
              <div>
                  {user.followed
                      ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                          unfollowThunk(user.id);
                      }}>Unfollow</button>
                      : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                          followThunk(user.id);
                      }}>Follow</button>
                  }

              </div>
            </span>
            <span>
              <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
              </span>
              <span>
                  <div>{"user.location.country"}</div>
                  <div>{"user.location.city"}</div>
              </span>
            </span>
        </div>
    )

};

export default User;