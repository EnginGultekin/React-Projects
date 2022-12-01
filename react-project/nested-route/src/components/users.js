import { useEffect, useState } from 'react'
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom'
import axios from 'axios'

import User from './user'


function Users() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const { path, url } = useRouteMatch();

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div>
      <h1>Users</h1>

      {
        isLoading && <div>Loading ...</div>
      }
      {
        !isLoading && <ul>
          {
            users.map((user) => (
              <li key={user.id}>
                <NavLink to={`${url}/${user.id}`} activeClassName='active'>{user.name}</NavLink>
              </li>
            ))
          }
        </ul>
      }

      <Switch>
        <Route exact path={path}>
          <h3>Please select a user.</h3>
        </Route>
        <Route path={`${path}/:id`} component={User} />
      </Switch>
    </div>
  )
}

export default Users