import React from 'react';
import s from './FormsControls.module.css';


export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
            <div>
                <textarea {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }

        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={s.form_control + ' ' + (hasError ? s.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span> }

        </div>
    )
};

