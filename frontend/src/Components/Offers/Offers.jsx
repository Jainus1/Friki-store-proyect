import React from 'react'
import './Offers.css'
import esclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>Exlcusive</h1>
        <h1>Offers Only For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
        
      </div>
      <div className="offers-right">
        <img src={esclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers