import './App.css';
import Counter from './components/counter'
import InputExample from './components/input-example'
import AddListFromInput from './components/add-list-from-input'
import { useState } from "react";

function App() {

  const [name, setName] = useState('EngLeng')
  const [age, setAge] = useState(23)
  const [friends, setFriends] = useState(['EngLeng', 'LuganHan'])
  const [address, setAddress] = useState({ title: "Ankara", zip: 445435 })
  const [users, setUsers] = useState([{ name: 'Hakim', age: 34 }, { name: 'Lugan', age: 48 }])


  return (
    <div className="App">

      <br /><br />
      <hr />
      
      <AddListFromInput/>

      <br /><br /><br /><br />
      <hr /><hr /><hr />
      

      <InputExample />

      <br /><br />
      <hr />

      <Counter />

      <br /><br />
      <hr />

      <h1>Haloooooo {name}</h1>
      <h2>{age}</h2>
      <button onClick={() => setName('LuganHan')}>Change Name</button> <br />
      <button onClick={() => setAge(45)}>Change Age</button>

      <br /><br />
      <hr />

      <h2>Friends</h2>
      {
        friends.map((friend, index) => <div key={index}>{friend}</div>)
      }
      <button onClick={() => setFriends([...friends, "HakimHan"])}>Add New Friend</button>

      <br /><br />
      <hr />

      <h2>Address</h2>
      {
        <div>{address.title} {address.zip}</div>
      }
      <button onClick={() => setAddress({ title: "Hatay", zip: "8585858" })}>Change Address</button> <br />
      <button onClick={() => setAddress({ ...address, title: "Hatay" })}>Only Change Place</button> <br />
      <button onClick={() => setAddress({ ...address, zip: "8585858" })}>Only Change Zip</button>

      <br /><br />
      <hr />

      <h2>Users</h2>
      {
        users.map((user) => <div key={user.id}> {user.name} {user.age}</div>)
      }
      <button onClick={() => setUsers([...users, { name: 'EngLeng', age: 23 }])}>Kullanıcı Ekle</button>
      <br /><br />
      <br /><br />
      <br /><br />
    </div>
  );
}

export default App;
