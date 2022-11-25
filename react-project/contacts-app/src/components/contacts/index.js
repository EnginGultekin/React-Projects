import { useState, useEffect } from 'react'
import List from './List/index'
import Form from './Form/index'

function Contacts() {

    const [contacts, setContact] = useState([
        {name:'Hakimi', phoneNum:'0531 852 78 52'},
        {name:'LuhanHan', phoneNum:'0541 745 21 12'},
        {name:'EngLeng', phoneNum:'0531 481 03 00'},
    ])

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id='container'>
            <h1>Contacts</h1>
            <List userList={contacts}/>
            <Form contacts={contacts} addContact={setContact} />
        </div>
    )
}

export default Contacts 