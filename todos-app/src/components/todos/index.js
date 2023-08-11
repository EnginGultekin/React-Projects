import { useState } from 'react'
import Form from './form/form'
import List from './list/list'
import Footer from './footer/footer'

function Todo() {

    const [toDoList, setToDoList] = useState([
        { note: 'Lerarn React', check: false },
        { note: 'Have a Life', check: false },
        { note: 'Learn JavaScript', check: true },
    ])

    return (
        <div>
            <section className="todoapp">
                <Form addToDoList={setToDoList} />
                <List toDoList={toDoList} editToDoList={setToDoList} />
            </section>
            <Footer />
        </div >
    );
}

export default Todo