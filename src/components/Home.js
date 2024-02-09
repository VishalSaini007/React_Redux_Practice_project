import React from 'react'
import '../App.css'

export const Home = () => {
  return (
    <>
        <div>Home</div>

        <div className='cart'>
            <h1>Cart : 0 </h1>
        </div>
      

        <div className='item'>
            <h1>Samsung</h1>
            <img width={100} height={200} src="https://i.ebayimg.com/00/s/MTUwMFgxMTY3/z/B~MAAOSwyhtjD-Ws/$_57.JPG?set_id=8800005007" alt="phone image" />
            <span>Price : 45,000 Rs</span>
            <button >Add to Cart</button>

        </div>
    </>

  )
}
