/* eslint-disable react/prop-types */
import { useState } from 'react'

const Header = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>
        {text}
      </button>
    </>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  if ((good + bad + neutral) <= 0) {
    return <></>
  }
  return (
    <>
      <StatisticLine text='Good' count={good}/>
      <StatisticLine text='Neutral' count={neutral}/>
      <StatisticLine text='Bad' count={bad}/>
      <StatisticLine text='Total' count={bad + good + neutral}/>
      <StatisticLine text='Average' count={(good - bad)/(bad + good + neutral)}/>
      <StatisticLine text='Positive' count={`${(good/(bad + good + neutral)) * 100} %`}/>
    </>
  )
}

const StatisticLine = ({ text, count }) => {
  return (
    <>
      <p>{text} {count}</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title='Give feedback'/>
      <Button handleClick={() => setGood(good + 1)} text='Good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='Bad'/>
      <Header title='Statistics'/>
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App