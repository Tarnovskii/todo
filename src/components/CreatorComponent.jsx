import React from 'react'

export const Creator = (props) => {
    return (
        <div className={s.wrapper}>
            <input placeholder={"Название таски"}/>
            <textarea placeholder={"Описание"}/>

            <p>Начальный статус: </p>
            <p><input name="status" type="radio" value="todo"/> To Do</p>
            <p><input name="status" type="radio" value="inProgress"/> In Progress</p>
            <p><input name="status" type="radio" value="complete" checked/> Complete</p>
            <p>Дедлайн: <input type={'date'}/></p>

            <button> Создать </button>
        </div>
    )
}
