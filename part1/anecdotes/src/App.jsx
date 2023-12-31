/* eslint-disable react/prop-types */
import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(8).fill(0))

  const handleVote = () => {
    const votesCopy = [...votes]
    votesCopy[selected] += 1
    setVotes(votesCopy)
  }

  const indexOfMaxValue = () => {
    let maxIndex = 0
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > votes[maxIndex]) {
          maxIndex = i
      }
    }
    return maxIndex
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <div>Has {votes[selected]} votes</div>
      <Button text='Vote' handleClick={handleVote}/>
      <Button text='Next anecdote' handleClick={() => setSelected(Math.floor(Math.random() * 8))}/>
      <h1>Anecdote with most votes</h1>
      <div>{anecdotes[indexOfMaxValue()]}</div>
      <div>Has {votes[indexOfMaxValue()]} votes</div>
    </div>
  )
}

export default App