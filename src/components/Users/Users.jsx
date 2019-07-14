import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://www.nastol.com.ua/pic/201605/1600x900/nastol.com.ua-173592.jpg',
                    followed: false,
                    fullName: "Alex",
                    status: "savage",
                    location: {city: 'Odessa', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://avatars.mds.yandex.net/get-pdb/38069/6d8b43bf-a539-493d-a4f4-ef9f8be3bd58/s1200?webp=false',
                    followed: false,
                    fullName: "Olga",
                    status: "suicide",
                    location: {city: 'Odessa', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'http://m.vodafone.smsclick.com.ua/public/test/video/record/image/1526568181_oleksandr-kvarta-boze-ak-garno.jpg',
                    followed: true,
                    fullName: "Lilia",
                    status: "rave",
                    location: {city: 'Kiev', country: 'Ukraine'}
                },
                {
                    id: 4,
                    photoUrl: 'http://static.hdw.eweb4.com/media/wallpapers_dl/1/132/1319993-asian-girl-with-glasses-on-a-bench.jpg',
                    followed: true,
                    fullName: "Max",
                    status: "just me",
                    location: {city: 'Odessa', country: 'Ukraine'}
                },
            ]
        );
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                  <span>
                      <div>
                          <img src={u.photoUrl} alt="" className={s.userPhoto}/>
                      </div>
                      <div>
                          {u.followed
                              ? <button onClick={() => {
                                  props.unfollow(u.id)
                              }}>Unfollow</button>
                              : <button onClick={() => {
                                  props.follow(u.id)
                              }}>Follow</button>
                          }

                      </div>
                  </span>
                    <span>
                      <span>
                          <div>{u.fullName}</div>
                          <div>{u.status}</div>
                      </span>
                      <span>
                          <div>{u.location.country}</div>
                          <div>{u.location.city}</div>
                      </span>
                  </span>
                </div>)
            }
        </div>
    )
};

export default Users;