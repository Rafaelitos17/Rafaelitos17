import React from 'react'
import s from './Message.module.css'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.wrapper}>
            <div className={s.body}>
                <div className={s.photo}>
                    <img className={s.photo_logo} src={props.avatar} alt="batman"/>
                </div>
                <div className={s.another_Message}>
                    <span className={s.name}>{props.name}</span>
                    <p className={s.message}>
                        {props.message}
                    </p>
                    <div className={s.time}>
                        {props.time}
                    </div>
                </div>

            </div>
        </div>

    )
}

