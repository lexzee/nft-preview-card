import { useState } from 'react'
import './App.css'
import dImg from "./images/image-equilibrium.jpg"
import ethIcon from './images/icon-ethereum.svg'
import clock from './images/icon-clock.svg'
import avatar from './images/image-avatar.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <img src={dImg} alt="Equilibrium" className='nftImg' />
        <div className="cardDetails">
          <h1 className="title">
          Equilibrium #3429
          </h1>
          <p className="description">
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className="priceDuration">
            <p className="price">
              <img src={ethIcon} alt="#" className='ethIcon' /> 0.041 ETH
            </p>
            <p className="duration">
              <img src={clock} alt="" className="clock" />
              3 days left
            </p>
          </div>
          <div className="author">
            <img src={avatar} alt="" className="author" />
            <p className="authName"><span className="authSpan">Creation of</span> Jules Wyvern</p>
          </div>
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
