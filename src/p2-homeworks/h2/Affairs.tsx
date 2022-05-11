import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

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
            <button onClick={() => setAll("all")}>All</button>
            <button onClick={() => setHigh("high")}>High</button>
            <button onClick={() => setMiddle("middle")}>Middle</button>
            <button onClick={() => setLow("low")}>Low</button>
        </div>
    )
}

export default Affairs
