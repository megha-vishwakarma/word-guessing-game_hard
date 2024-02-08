const Header = ({ score = 0, lives = 0, maxLives = 10 }) => {
  return (
    <header>
      <h1>Word Guess</h1>
      <div>
        <span><strong>Score:</strong> {score}</span>
        {' '}
        <span id="lives">
          {[...Array(maxLives).keys()].map((_, i) => {
            return <span style={{ opacity: i + 1 <= lives ? 1 : 0.25 }}>&hearts;</span>
          })}
        </span>
      </div>
    </header>
  )
}

export default Header