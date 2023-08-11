import { useState, useEffect } from 'react'

function Form({ addToDoList }) {

    const initialValue = { note: "", check: false }
    const [formKey, setFormKey] = useState(initialValue)
    const onChangeForm = (event) => {
        setFormKey(
            { ...formKey, [event.target.name]: event.target.value })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        if (formKey.note === "") {
            alert('You can not add empty text')
            return false
        }
        else {
            addToDoList((prevState) => [...prevState, formKey])
            setFormKey(initialValue)
        }
    }
    return (
        <div >
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={onSubmitForm}>
                    <input name='note' className="new-todo"
                        value={formKey.note}
                        placeholder="What needs to be done?"
                        autoFocus onChange={onChangeForm} />
                </form>
            </header>
        </div>
    )
}

export default Form