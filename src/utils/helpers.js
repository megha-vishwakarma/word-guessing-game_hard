export const checkWord = (word = '', guesses = []) => (
  word
    .split('')
    .every(letter => guesses.includes(letter))
)