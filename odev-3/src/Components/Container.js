import React from 'react'
import Input from './Input'
import Wheather from './Wheather'

function Container() {
    return (
        <div>
            <Input />
            <div className='mt-5'>
                <Wheather />
            </div>

        </div>
    )
}

export default Container