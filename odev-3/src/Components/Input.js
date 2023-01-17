import { useEffect, useState } from 'react'
import { useFormik } from 'formik';

import { useCity } from '../Context/CityContext'

function Input() {

    const { city, setCity, cities } = useCity()

    const changeCity = (event) => {
        setCity(event.target.value)
    }

    return (
        <div>
            <div>
                <form className='mt-5'>
                    <div className='container select-style'>
                        <select className='form-select border-1 rounded-3' name='city' value={city} onChange={changeCity}>
                            {
                                cities.map((item, index) => (
                                    <option key={index}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    {/* <div className='mt-5'>
                        {city}
                    </div> */}
                </form>
            </div>
        </div>
    )
}

export default Input