export const getRandomWord = async () => {
  const response = await fetch('https://random-word-api.herokuapp.com/word')
  return response.json()
}