import { useState } from 'react'

function AddListFromInput() {

    // UserList and AddUserList function
    const [userList, setUserList] = useState([{}])
    const addUser = () => {
        setUserList([...userList,
        {
            name: formKey.name,
            surname: formKey.surname,
            age: formKey.age
        }])
    }

    // Input and InputValue
    const [formKey, setFormKey] = useState({ name: "", surname: "", age: 0 })
    const onChangeInput = (event) => {
        console.log(event.target.name)
        setFormKey({ ...formKey, [event.target.name]: event.target.value })
    }


    return (
        <>
            Name <br />
            <input id='name' name='name' value={formKey.name} onChange={onChangeInput} />

            <br /><br />

            Surname<br />
            <input id='surname' name='surname' value={formKey.surname} onChange={onChangeInput} />

            <br /><br />

            Age<br />
            <input id='age' name='age' value={formKey.age} onChange={onChangeInput} />

            <br /><br />

            {`Name: ${formKey.name}`}<br />  
            {`Surname: ${formKey.surname}`}<br /> 
            {`Age: ${formKey.age}`}<br /><br />

            <button onClick={addUser}>Kullanıcıyı Ekle</button>
            <br /><br /> <br />
            <hr /><hr />
            <h2>Users</h2>

            {
                userList.map((user) => <div key={user.id}> {user.name} {user.surname} {user.age} </div>)
                
            }

        </>
    );
}

export default AddListFromInput