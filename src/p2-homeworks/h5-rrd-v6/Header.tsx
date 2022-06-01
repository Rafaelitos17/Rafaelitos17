import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

type ActionType = {
    [key: string]: boolean
}

function Header() {
    const setAction = ({isActive}: ActionType) => isActive ? s.active : s.item
    return (
        <div>
            <NavLink to={PATH.PRE_JUNIOR}
                     className={navData => navData.isActive ? s.active : s.link}>Pre_Junior</NavLink>
            <NavLink to={PATH.JUNIOR} className={navData => navData.isActive ? s.active : s.link}>Junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS}
                     className={navData => navData.isActive ? s.active : s.link}>JuniorPlus</NavLink>
            <div className={s.block}></div>
        </div>
    )
}

export default Header
