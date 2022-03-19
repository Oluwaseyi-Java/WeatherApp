import React from 'react'
import Header from './header'
import { Link } from 'react-router-dom'


const Developer = () => {
  return (
    <div className='developer'> 
        <Header/>
        <p id='message'> The section will be updated later.</p>
        <Link to="/">
          <button >Go Back</button>
        </Link>
    </div>
    )
}

export default Developer