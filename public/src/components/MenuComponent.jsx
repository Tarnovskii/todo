import React from "react";
import s from '../stylesheets/menu.module.css'
import {Link} from "react-router-dom";

export default (props) => {
    return (
        <section state={props.state} className={s.wrapper}>
            <Link to={'/list'}>Все задачи!</Link>
            <Link to={'/create'}>Создать задачу</Link>
            <Link to={'/signout'}>Выйти</Link>
        </section>
    )
}