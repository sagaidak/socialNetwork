import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    let dataContacts = [];
    for (let key in props.profile.contacts) {
        if(props.profile.contacts[key]) {
            dataContacts.push(`${key}: ${props.profile.contacts[key]}`);
        }
    }



    return (
        <div >
            <div>
                <img src='https://i.redd.it/wkk4zz08qf731.jpg' />
            </div>
            <div className={s.description_block}>
                <div>Name: {props.profile.fullName}</div>
                <div>Contacts: {dataContacts.map(c => (
                    <div>{c}</div>
                ))}</div>
                <div>UserID: {props.profile.userId}</div>
                <div>lookingForAJob: {props.profile.lookingForAJob}</div>
                <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>

                <img src={props.profile.photos.small} />

            </div>
        </div>
    )
}

export default ProfileInfo;