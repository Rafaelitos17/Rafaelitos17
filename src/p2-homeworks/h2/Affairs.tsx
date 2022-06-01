import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (a: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (a: FilterType) => {
        props.setFilter(a)
    }
    const setHigh = (a: FilterType) => {
        props.setFilter(a)
    }
    const setMiddle = (a: FilterType) => {
        props.setFilter(a)
    }
    const setLow = (a: FilterType) => {
        props.setFilter(a)
    }

    return (
        <div>
            {mappedAffairs}
            <SuperButton onClick={() => setAll("all")}>All</SuperButton>
            <SuperButton onClick={() => setHigh("high")}>High</SuperButton>
            <SuperButton onClick={() => setMiddle("middle")}>Middle</SuperButton>
            <SuperButton onClick={() => setLow("low")}>Low</SuperButton>
        </div>
    )
}

export default Affairs
