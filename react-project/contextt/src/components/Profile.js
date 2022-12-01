import { useState } from 'react'

import { useUser } from '../context/UserContext'

function Profile() {

    const { user, setUser } = useUser()
    const [isLoading, setIsLoading] = useState(false)

    const handleLogIn = () => {
        setIsLoading(true)
        setTimeout(() => {
            setUser({ id: 1, username: "LuganHan", bio: 'Asian Humans Population' })
            setIsLoading(false)
        }, 1000)
    }

    const handleLogOut = () => {
        setUser(null)
    }

    return (
        <div>
            {!user &&
                (<button onClick={handleLogIn}>{isLoading ? "Loading..." : "Login"}</button>)
            }
            <br />
            <br />
            <code>{JSON.stringify(user)}</code>
            <br />
            <br />
            {user && <button onClick={handleLogOut}>Log out</button>}

        </div>
    )
}

export default Profile