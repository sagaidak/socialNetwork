import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div >
            <div>
                <img src='https://i.redd.it/wkk4zz08qf731.jpg' />
            </div>
            <div className={s.description_block}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;