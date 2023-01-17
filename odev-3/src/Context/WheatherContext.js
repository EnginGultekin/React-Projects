import { createContext, useContext, useState } from "react";

const WheatherContext = createContext()

export const WheatherProvider = ({ children }) => {

    const [wheather, setWheather] = useState("Enginnn")
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] 
    const apiKey = "d188a5e396ee151dd78063c1be5b2f0d"

    const values = {
        wheather,
        setWheather,
    }
    return <WheatherContext.Provider value={values}>{children}</WheatherContext.Provider>

}


export const useWheather = () => useContext(WheatherContext)
