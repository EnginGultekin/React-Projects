import { useEffect, useState } from 'react'
import { useParams, Link, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

function User() {

    const { id } = useParams()
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true) 


    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
            .catch((e) => console.log(e))
            .finally(() => setIsLoading(false))
    }, [id])

    return (
        <div>
            <h1>User Details's: <span style={{ color: 'red' }}>{user.username}</span></h1>
            {
                isLoading && <div>Loading User ...</div>
            }
            {
                !isLoading && <div>
                    <p><strong>User Id: </strong> {user.id}</p>
                    <p><strong>User Name:  </strong> {user.name}</p>
                    <p><strong>User Email: </strong> {user.email}</p>
                    <p><strong>User Phone: </strong> {user.phone}</p>
                    <p><strong>User Website:  </strong> {user.website}</p>
                </div>
            }
            <br />
            <br />
            <br />
            <br />

            <Link to={`/users/${parseInt(id) + 1}`}>Show Next User _-:-_ ({parseInt(id) + 1})</Link>


        </div>
    )
}

export default User