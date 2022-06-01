import React, {ChangeEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyDownHandler: (e: any) => void
}
//
// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyDownHandler} // деструктуризация пропсов
) => {

    const inputClass = error ? s.error : ""// need to fix with (?:)

    return (
        <div>
            <SuperInputText
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyDown={onKeyDownHandler}
            />
            <SuperButton onClick={() => addUser(name)}>add</SuperButton>
            <span>{totalUsers}</span>
            {error && <span className={s.spanError}>{error}</span>}
        </div>
    )
}

export default Greeting
