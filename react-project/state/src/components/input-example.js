import { useState } from 'react'

function InputExample() {
    const [form, setForm] = useState({ name: "", surname: "" })
    const onCahngeInput = (event) => {
        console.log(event.target.name)
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    return (
        <>
            <label forhtml='name' style={{ textAlign: "start" }}>Name</label><br />
            <input id='name' name='name' value={form.name} onChange={onCahngeInput} />
            <br />
            <br />
            <label forhtml='surname'>Surname</label><br />
            <input id='surname' name='surname' value={form.surname} onChange={onCahngeInput} />
            <br />
            <br />
            <br />
            {form.name} {form.surname}

        </>
    );
}


export default InputExample


/***************************** 1. Yol ******************************//*

function InputExample() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const onCahngeFuncName = (event) => setName(event.target.value)
    const onCahngeFuncSurname = (event) => setSurname(event.target.value)
 
    return (
        <>
            <label forhtml='name' style={{alignContent: "start"}}>Name</label><br />
            <input id='name' value={name} onChange={onCahngeFuncName} />
            <br />
            <br />
            <label forhtml='surname'>Surname</label><br />
            <input id='surname' value={surname} onChange={onCahngeFuncSurname} />
            <br />
            <br />
            {name} {surname}

        </>
    );
}




*/