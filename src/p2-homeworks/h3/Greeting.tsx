import React, {ChangeEvent, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

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
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={() => addUser(name)}>add</button>
            <span>{totalUsers}</span>
            {error && <span className={s.spanError}>{error}</span>}
        </div>
    )
}

export default Greeting
