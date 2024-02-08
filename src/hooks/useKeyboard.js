import { useState, useEffect } from 'react'

const pattern = /^([a-z])$/

const useKeyboard = () => {
  const [guesses, setGuesses] = useState([])

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  })

  const handleKeydown = (e) => {
    const key = e.key.toLowerCase()
    if (pattern.test(key) && !guesses.includes(key)) {
      setGuesses([...guesses, key])
    }
  }

  return [guesses, setGuesses]
}

export default useKeyboard