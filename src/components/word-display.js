import Spinner from './spinner'

const WordDisplay = ({ lives, loading = false, word = '', guesses = [], setGuesses }) => {
  return (
    <section id="word-display">
      {loading ? (
        <Spinner />
      ) : (
        word.split('').map((letter, i) => {
          const finalLetter = guesses.includes(letter) ? letter : '_'
          return <span key={`${letter}-${i}}`}>{finalLetter}</span>
        })
      )}   
    </section>
  )
}

export default WordDisplay