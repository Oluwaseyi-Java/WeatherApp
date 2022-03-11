import React from 'react'

const LocationText = () => {
    const location=()=>{
        return "Nigeria"
    }
  return (
      <div className='locationText'>Your current location is {location()}</div>
  )
}

export default LocationText