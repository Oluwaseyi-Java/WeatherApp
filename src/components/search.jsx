import React from 'react'
import searchIcon from "./image/search.png"

const search = () => {
  return (
    <div className='search'>
    <div className='search-wrapper'>
        <input className='input' type="text" placeholder="Search"/>
        <div className='search-img'>
            <img alt='search' src={searchIcon}/>
        </div>
    
    </div>
    </div>
  )
}

export default search