import React, {useEffect, useState} from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        setStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{status || 'No-status'}</span>
            </div>
            }
            {editMode &&
            <div>
                <input
                    autoFocus={true}
                    onBlur={deactivateEditMode}
                    value={status}
                    onChange={onStatusChange}
                />
            </div>
            }
        </div>
    )

};

export default ProfileStatusWithHooks;