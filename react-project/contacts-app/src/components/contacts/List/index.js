import { useEffect, useState } from 'react'

function List({ userList }) {

  const [filterText, setFilterText] = useState('')
  const onChangeFilter = (event) => {
    setFilterText(event.target.value)
  }

  const filteredList = userList.filter((item) => {
    return Object
      .keys(item)
      .some(((key) =>
        item[key]
          .toString()
          .toLowerCase()
          .includes(filterText.toLocaleLowerCase())
      ))
  })

  return (
    <div>
      <input name='list' value={filterText} onChange={onChangeFilter} placeholder='Search User in List' />
      <ul className='list'>
        {
          filteredList.map((user, index) => (
            <li key={index}>
              <span>{user.name}</span>
              <span>{user.phoneNum}</span>
            </li>
          ))
        }
      </ul>

      <p style={{fontSize:'18px'}}>Total Contacts ({filteredList.length})</p>

    </div>
  )
}

export default List