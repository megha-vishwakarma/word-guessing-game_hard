import { useEffect, useState } from 'react'
import Header from './components/header'
import WordDisplay from './components/word-display'
import GuessedLetters from './components/guessed-letters'
import GameOver from './components/game-over'
import useKeyboard from './hooks/useKeyboard'
import { getRandomWord } from './utils/api'
import { checkWord } from './utils/helpers'

const maxLives = 2
const extraGuesses = 5
let timeoutId

function App() {
  const [guesses, setGuesses] = useKeyboard()
  const [loading, setLoading] = useState(true)
  const [word, setWord] = useState('')
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(maxLives)

  const gameOver = lives <= 0

  useEffect(() => {
    // fetch initial word
    if (!word) {
      getWord()
    } else {
      // check if word guessed 
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        // check if matches
        const isMatch = checkWord(word, guesses)
        // determine if out of guesses
        const outOfTries = guesses.length >= word.length + extraGuesses
        if (isMatch || outOfTries) {
          isMatch
            ? setScore(score + 1)
            : setLives(lives - 1)
          setWord('')
          setGuesses([])
        }
      }, 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [guesses])

  const getWord = async () => {
    setLoading(true)
    try {
      const randWord = await getRandomWord()
      setWord(randWord[0])
      setGuesses([])
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  const restart = () => {
    setWord('')
    setGuesses([])
    setLives(maxLives)
  }

  return (
    <main className="container">
      <Header
        score={score}
        lives={lives}
        maxLives={maxLives}
      />
      {gameOver ? (
        <GameOver 
          score={score}
          handleRestart={restart}
        />
      ) : (
        <>
          <WordDisplay
            loading={loading}
            lives={lives}
            word={word}
            guesses={guesses}
          />
          <GuessedLetters
            word={word}
            guesses={guesses}
            extraGuesses={extraGuesses}
          />
        </>
      )}
    </main>
  );
}

export default App;
