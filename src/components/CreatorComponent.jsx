import React from 'react'

import s from '../stylesheets/creator.module.css'

export const Creator = (props) => {
    return (
        <div className={s.wrapper}>
            <input className={s.title} placeholder={"Название таски"}/>
            <textarea className={s.description} placeholder={"Описание"}/>

            <p>Начальный статус: </p>
            <div className={s.status_wrapper}>
                <p><input name="status" type="radio" value="todo"/> To Do</p>
                <p><input name="status" type="radio" value="inProgress"/> In Progress</p>
                <p><input name="status" type="radio" value="complete" checked/> Complete</p>
            </div>

            <p>Дедлайн: <input type={'date'}/></p>

            <button> Создать </button>
        </div>
    )
}
