import { useEffect, useState } from 'react'

function Form({ contacts, addContact }) {

  const initialValue = { name: '', phoneNum: '' }
  const [formKey, setFormKey] = useState(initialValue)
  const onChangeInput = (event) => {
    setFormKey({
      ...formKey, [event.target.name]: event.target.value
    })
  }

  // İnputlar içini bu şekilde de temizliyebiliriz ...
  // useEffect(() => {
  //   setFormKey(initialValue)
  // }, [contacts])

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (formKey.name === '' || formKey.phoneNum === '') {
      return false
    } else {
      addContact([...contacts, formKey])
      setFormKey(initialValue)
    }

  }

  return (
    <div>
      <form onSubmit={onSubmitForm}>
        <input
          name='name'
          value={formKey.name}
          onChange={onChangeInput}
          placeholder='Full name' />

        <input
          name='phoneNum'
          value={formKey.phoneNum}
          onChange={onChangeInput}
          placeholder='Phone Number' />

        <div className='btn'>
          <button>Add User</button>
        </div>
      </form>
    </div>
  )
}


export default Form