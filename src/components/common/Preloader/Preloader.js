import React from 'react';
import preloader from '../../../assets/loading.gif';
import s from './Preloader.component.css';

const Preloader = (props) => {
    return <div className={s.preloader}>
         <img src={preloader} />
    </div>

};

export default Preloader;