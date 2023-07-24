import React from 'react'
import QeydiyyatForm from '../components/QeydiyyatForm'
import { Link } from 'react-router-dom'

const Qeydiyyat = () => {
  return (
    <Link to="/home">
      
        <QeydiyyatForm/>  
    </Link>
    )
}

export default Qeydiyyat