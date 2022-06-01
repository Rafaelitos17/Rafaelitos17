import React from 'react'
import s from './Affairs.module.css'
import {AffairPriorityType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
            <SuperButton red={true} onClick={() => deleteCallback(props.affair._id)}>X</SuperButton>
        </div>
    )
}

export default Affair
