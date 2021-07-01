import React from 'react'
import { FaTimes, FaPen, FaRegCircle } from 'react-icons/fa'

const Icon = ({ name }) => {
    switch (name) {
        case 'circle':
            return <FaRegCircle color="black" className="icon" />
            break

        case 'cross':
            return <FaTimes  color="black" className="icon" />
            break

        default:
            return <FaPen color="black" className="icon" />
            break

    }
}

export default Icon
