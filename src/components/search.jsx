import React from 'react'
import searchIcon from "./image/search.png"

const Search = ({ onPressed }) => {

  const [value,setValue]=React.useState([

  ])

  const onSubmit=(e)=>{
    e.preventDefault()

    if(!value){
      alert("Enter a city")
      return
    }
    onPressed(value)

    setValue("")
  }
  return (
    <div className='search'>
    <div className='search-wrapper'>
        <input className='input'  
          type="text" 
          placeholder="Enter your city"
          value={value}
          onChange={(e)=>
            setValue(e.target.value)
          }
        />
        <div className='search-img' onClick={onSubmit}>
            <img alt='search' src={searchIcon}/>
        </div>
    
    </div>
    </div>
  )
}

export default Search