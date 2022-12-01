import Button from './Button'
import Header from './Header'

import { useTheme } from '../context/ThemeContext'
import Profile from './Profile'

function Container() {

    const { theme, setTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <hr />
            <br />
            <Header />
            <br />
            <hr />
            <Button />
            <br />
            <hr />
            <Profile />
            <br />
            <hr />
        </div>
    )
}

export default Container