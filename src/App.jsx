import { useState } from 'react'
import './App.css'
import dImg from "./images/image-equilibrium.jpg"
import ethIcon from './images/icon-ethereum.svg'
import clock from './images/icon-clock.svg'
import avatar from './images/image-avatar.png'

function App() {
  return (
    <>
      <div className="App">
        <div className="cardImg">
          <img src={dImg} alt="Equilibrium" className='nftImg' />
        </div>
        <div className="cardDetails">
          <h1 className="title">
          Equilibrium #3429
          </h1>
          <p className="description">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="priceDuration">
            {/* <div className="price">
              <img src={ethIcon} alt="#" className='ethIcon' /> 0.041 ETH
            </div>
            <div className="duration">
              <img src={clock} alt="" className="clock" />
              3 days left
            </div> */}
            <img src={ethIcon} alt="" className="ethIcon" />
            <p className="price">0.041 ETH</p>
            <img src={clock} alt="" className="duration" />
            <p className="time">3 days left</p>
          </div>
        </div>
        <div className="author">
          <img src={avatar} alt="" className="authorImg" />
          <p className="authName"><span className="authSpan">Creation of</span> <span className="name"> Jules Wyvern</span></p>
        </div>
      {/*

Creation of Jules Wyvern */}
      </div>
      <div class="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge"      target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://github.com/lexzee">Lexzee</a>.
      </div>
    </>
  )
}

export default App
