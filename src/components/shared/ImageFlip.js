import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import './ImageFlip.css'
import Me from '../../images/sideways.jpg'
import fancyMe from '../../images/glasses.jpg'

function ImageFlip() {
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })
  return (
    <div onClick={() => set(state => !state)}>
      <a.img  src={Me} className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform, position: 'absolute', marginLeft: '-150px', left: '50%', top: '50%', marginTop: '150px' }} />
      <a.img src={fancyMe} className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`), position: 'absolute', marginLeft: '-150px', left: '50%', top: '50%', marginTop: '150px'}} />
    </div>
  )
}

export default ImageFlip;