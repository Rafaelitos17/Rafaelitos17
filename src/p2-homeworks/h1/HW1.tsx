import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://papik.pro/uploads/posts/2021-09/1632007657_5-papik-pro-p-betmen-krutie-risunki-5.jpg',
    name: 'Batman',
    message: 'Привет! Я Бэтмен!',
    time: '18:00',
}

const HW1 = () => {
    return (
        <div>
            <hr/>
            homeworks 1

            {/*should work (должно работать)*/}

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}


export default HW1

