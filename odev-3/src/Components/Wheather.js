import { useState } from 'react'
import { useWheather } from '../Context/WheatherContext'

function Wheather() {
    const { wheather, setWheather } = useWheather()

    return (
        <div>
            {wheather}
        </div>
    )
}

export default Wheather