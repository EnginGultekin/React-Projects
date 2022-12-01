import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')


    useEffect(() => {
        localStorage.setItem('theme', theme)
    }, [theme])

    const values = {
        theme, setTheme,
    }

    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}


// Burda yaptığımız fonksyon işlemini normalde kullanacağımız sayfalarda yapmak yerine 
// Burda tek satırda yapıp kullanılacağı yerde daha kısa şekilde erişebilriz.
export const useTheme = () => useContext(ThemeContext)