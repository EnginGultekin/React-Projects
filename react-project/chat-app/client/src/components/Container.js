import { useEffect } from 'react'
import ChatForm from './ChatForm'
import ChatList from './ChatList'
import { init, subscribeChat, subscribeInitialMessages } from '../socketApi'
import { useChat } from '../context/ChatContext'

function Container() {

    const { setMessages } = useChat();

    useEffect(() => {
        init();
        subscribeInitialMessages((messagesList => {
            setMessages(messagesList)
        }))
        subscribeChat((message) => {
            setMessages((prevState) => [...prevState, { message }])
        });

    }, [])

    return (
        <div className='App'>
            <ChatList />
            <ChatForm />
        </div>
    )
}

export default Container