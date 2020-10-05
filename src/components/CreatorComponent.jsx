import React from 'react'

import s from '../stylesheets/creator.module.css'

export const Creator = (props) => {
    console.log(props);
    return (
        <div className={s.wrapper}>
            <input className={s.title}
                   onChange={(e) => {
                       props.formHandler({type: "CHANGE_TITLE", value: e.target.value})
                   }}
                   value={props.values.title}
                   placeholder={"Название таски"}
            />
            <textarea className={s.description}
                      onChange={(e) => {
                          props.formHandler({type: "CHANGE_DESCRIPTION", value: e.target.value})
                      }}
                      value={props.values.description}
                      placeholder={"Описание"}/>

            <p>Начальный статус: </p>
            <div className={s.status_wrapper}>
                <p><input name="status"
                          onClick={() => props.formHandler({type: "UPDATE_RADIO", value: "todo"})}
                          type="radio" value="todo" checked={props.values.status === "todo"}/> To Do</p>
                <p><input name="status"
                          onClick={() => props.formHandler({type: "UPDATE_RADIO", value: "inProgress"})}
                          type="radio" value="inProgress" checked={props.values.status === "inProgress"}/> In Progress</p>
                <p><input name="status"
                          onClick={() => props.formHandler({type: "UPDATE_RADIO", value: "complete"})}
                          type="radio" value="complete" checked={props.values.status === "complete"}/> Complete</p>
            </div>

            <p>Дедлайн: <input value={props.values.date} onChange={(e) => {
                props.formHandler({type: "CHANGE_DATE", value: e.target.value})
            }} type={'date'}/></p>

            <button onClick={props.confirm}> Создать </button>
        </div>
    )
}
