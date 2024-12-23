import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [enable, setEnable] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0})

  // // pointer move
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY})
    }

    if(enable) {
      window.addEventListener('pointermove', handleMouseMove)
    }

    // clean effect
    return () => {
      window.removeEventListener('pointermove', handleMouseMove)
    } 
  }, [enable])

  // change body class for no cursor when enable
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enable])

  return (
    <main>
      <div
        style={{
          position: 'absolute',
          backgroundColor: '#ffde21',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.5,
          pointerEvents: 'none',
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      />
      <button onClick={() => setEnable(!enable)}>
        {enable ? 'Disable' : 'Enable'}
      </button>
    </main>
  )
}

export default App
