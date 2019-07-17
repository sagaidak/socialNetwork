import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
let baseURL = 'https://social-network.samuraijs.com/api/1.0';


class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then( response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then( response => {this.props.setUsers(response.data.items)});
    };

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span className={ this.props.currentPage === p && s.selectedPage }
                                    onClick={() => {this.onPageChanged(p)}}
                        >{p}</span>
                    })}

                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                  <span>
                      <div>
                          <img src={u.photos.small != null ? u.photos.small : "https://im0-tub-ua.yandex.net/i?id=dd2cf00050c2bdee7367b812138f0038&n=33&w=240&h=150"} alt="" className={s.userPhoto}/>
                      </div>
                      <div>
                          {u.followed
                              ? <button onClick={() => {
                                  this.props.unfollow(u.id)
                              }}>Unfollow</button>
                              : <button onClick={() => {
                                  this.props.follow(u.id)
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
    }
}

export default Users;