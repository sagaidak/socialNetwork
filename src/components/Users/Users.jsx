import React from 'react';
import s from './Users.module.css';
import {NavLink} from "react-router-dom";
import {userAPI} from "../../api/api";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                    >{p}</span>
                })}

            </div>
            {
                props.users.map(u => <div key={u.id}>
                  <span>
                      <div>
                          <NavLink to={'/profile/' + u.id}>
                          <img
                              src={u.photos.small != null ? u.photos.small : "https://im0-tub-ua.yandex.net/i?id=dd2cf00050c2bdee7367b812138f0038&n=33&w=240&h=150"}
                              alt="" className={s.userPhoto}/>
                          </NavLink>
                      </div>
                      <div>
                          {u.followed
                              ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                  props.toggleIsFollowingProgress(u.id, true);

                                  userAPI.unfollow(u.id).then(response => {
                                      if (response.resultCode === 0) {
                                          props.unfollow(u.id)
                                      }
                                      props.toggleIsFollowingProgress(u.id, false);
                                  });
                              }}>Unfollow</button>
                              : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                  props.toggleIsFollowingProgress(u.id, true);
                                  userAPI.follow(u.id)
                                      .then(response => {
                                          if (response.resultCode === 0) {
                                              props.follow(u.id)
                                          }
                                          props.toggleIsFollowingProgress(u.id, false);
                                      });
                              }}>Follow</button>
                          }

                      </div>
                  </span>
                    <span>
                      <span>
                          <div>{u.name}</div>
                          <div>{u.status}</div>
                      </span>
                      <span>
                          <div>{"u.location.country"}</div>
                          <div>{"u.location.city"}</div>
                      </span>
                  </span>
                </div>)
            }
        </div>
    )
};

export default Users;