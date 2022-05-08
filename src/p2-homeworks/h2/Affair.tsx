import React from 'react'
import s from './Affairs.module.css'
import {AffairPriorityType} from "./HW2";

type AffairPropsType = {
    affair: {
        _id: number,
        name: string,
        priority: AffairPriorityType
    }
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (a: number) => {
        props.deleteAffairCallback(a)
    }

    return (
        <div className={s.wrapper}>
            <div>{props.affair.name}</div>
            <div>{props.affair.priority}</div>
            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
