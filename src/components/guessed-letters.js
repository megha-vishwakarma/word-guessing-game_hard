const GuessedLetters = ({ guesses = [], word = '', extraGuesses = 0 }) => (
  <section id="guessed-letters">
    <h3>Guesses Left: {word.length + extraGuesses - guesses.length}</h3>
    [ {guesses.map(s => <span key={s}>{' '}{s}{' '}</span>)} ]
  </section>
)

export default GuessedLetters