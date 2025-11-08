
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Hero.css'

const plants = [
    {
      id: 1,
      src: 'images/plant1.png',
      name: 'Anthurium',
      description:
        'Anthuriums are tropical beauties known for their heart-shaped, waxy flowers and glossy green leaves. Perfect for brightening up any indoor space. Their vibrant blooms symbolize hospitality and warmth, adding color and charm to your décor.',
    },
    {
      id: 2,
      src: 'images/plant2.png',
      name: 'Areca Palm',
      description:
        'The Areca Palm brings a breezy tropical feel indoors. Its feathery fronds purify air and create a lush, natural atmosphere. It thrives in indirect light and instantly turns any corner into a mini tropical retreat.',
    },
    {
      id: 3,
      src: 'images/plant3.png',
      name: 'Fiddle Leaf Fig',
      description:
        'Known for its large, glossy leaves and sculptural form, the Fiddle Leaf Fig adds elegance and vibrancy to your home décor. A statement plant that grows tall with care, becoming the green centerpiece of any room.',
    },
    {
      id: 4,
      src: 'images/plant4.png',
      name: 'Snake Plant',
      description:
        'One of the toughest houseplants, the Snake Plant thrives on neglect and purifies the air while adding a modern, upright touch. Its sleek, sword-like leaves bring structure and sophistication to minimalist spaces.',
    },
  ]
  

const Hero = () => {
  const [positions, setPositions] = useState(['top', 'left', 'bottom', 'right'])

  const rotateRight = () => {
    setPositions((prev) => {
      const newPos = [...prev]
      newPos.unshift(newPos.pop())
      return newPos
    })
  }

  const rotateLeft = () => {
    setPositions((prev) => {
      const newPos = [...prev]
      newPos.push(newPos.shift())
      return newPos
    })
  }

  const topIndex = positions.indexOf('top')
  const currentPlant = plants[topIndex]

  const coords = {
    top: { x: 0, y: -200 },
    right: { x: 200, y: 0 },
    bottom: { x: 0, y: 200 },
    left: { x: -200, y: 0 },
  }

  return (
    <section className="hero">
      <img src="images/h3.png" alt="hero" className="hero-img" />

      <div className="hero-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPlant.id}
            className="description-box"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
         <h1 className='plant-name'> {currentPlant.name}</h1>
         <p className='plant-desc'>{currentPlant.description}</p>
         <div className="btn-group">
            <button>Learn More</button>
         </div>
          </motion.div>
        </AnimatePresence>

        <div className="more-plants">
          <h2>More Plants for You</h2>
          <div className="plant-grid">
            <div className="plant-card">
              <img src="images/plant1.png" alt="plant1" />
              <div className="plant-label">Peace Lily</div>
            </div>
            <div className="plant-card">
              <img src="images/plant2.png" alt="plant2" />
              <div className="plant-label">Snake Plant</div>
            </div>
            <div className="plant-card">
              <img src="images/plant3.png" alt="plant3" />
              <div className="plant-label">Aloe Vera</div>
            </div>
            <div className="plant-card">
              <img src="images/plant4.png" alt="plant4" />
              <div className="plant-label">Monstera</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="arrow left-arrow" onClick={rotateLeft}>
          &#8592;
        </div>

        <div className="blob">
          <svg viewBox="0 0 200 200">
            <path
              fill="#6C8B61"
              d="M63,-48.8C78.8,-30.5,86.7,-4.4,82,19.8C77.3,44,60,66.3,37,77.7C14,89.1,-14.6,89.5,-36.9,78.2C-59.2,66.9,-75,43.8,-80.7,18.6C-86.4,-6.7,-81.8,-34.1,-66.6,-52.3C-51.5,-70.5,-25.7,-79.4,-1.1,-78.5C23.6,-77.6,47.2,-67.1,63,-48.8Z"
              transform="translate(100 100)"
            />
          </svg>

          {plants.map((plant, index) => {
            const pos = positions[index]
            return (
              <motion.img
                key={plant.id}
                src={plant.src}
                alt={plant.name}
                className="plant"
                animate={{
                  x: coords[pos].x,
                  y: coords[pos].y,
                  scale: pos === 'top' ? 2.3 : 1.2,
                  zIndex: pos === 'top' ? 3 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: [0.45, 0, 0.55, 1],
                }}
              />
            )
          })}
        </div>

        <div className="arrow right-arrow" onClick={rotateRight}>
          &#8594;
        </div>
      </div>
    </section>
  )
}

export default Hero
