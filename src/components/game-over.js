const GameOver = ({ handleRestart, score }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <h3>Final Score: {score}</h3>
      <button onClick={handleRestart}>Play again</button>
    </div>
  )
}

export default GameOver