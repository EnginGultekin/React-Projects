import { createContext, useContext, useState } from "react";
import CityData from '../data/city.json'

const CityContext = createContext()


export const CityProvider = ({ children }) => {
    const [city, setCity] = useState("Ankara")
    const cities = [...CityData.filter((item) => item.name != '')]

    const values = {
        city,
        setCity,
        cities,
    }

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}

export const useCity = () => useContext(CityContext)