import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function User() {

    const { id } = useParams();
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <div>
            <h2>User Detail</h2>
            {loading && <div>Loading...</div>}
            {
                !loading && <div>
                    <p><strong>id: </strong> {user.id}</p>
                    <p><strong>name: </strong>  {user.name}</p>
                    <p><strong>email: </strong> {user.email}</p>
                    <p><strong>phone: </strong> {user.phone}</p>
                </div>
            }
            <br />
            <br />
            <br />
            <Link to={`/user/${parseInt(id) + 1}`} >Next User ({parseInt(id) + 1})</Link>
        </div>
    )
}

export default User