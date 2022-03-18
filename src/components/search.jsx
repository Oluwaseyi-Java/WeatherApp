import React from 'react'
import searchIcon from "./image/search.png"

const Search = () => {

  const [value,setValue]=React.useState([])

  const onSubmit=()=>{
    
  }
  return (
    <div className='search'>
    <div className='search-wrapper'>
        <input className='input' type="text" placeholder="Search"/>
        <div className='search-img' onClick={onSubmit}>
            <img alt='search' src={searchIcon}/>
        </div>
    
    </div>
    </div>
  )
}

export default Search