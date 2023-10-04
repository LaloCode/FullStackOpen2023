/* eslint-disable react/prop-types */
import { useState } from 'react'

const Number = ({name, number}) => {
  return <p>{name} {number}</p>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((person => person.name === newName))) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    setPersons(persons.concat({name: newName, number: newNumber}))
    setNewName('')
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          Filter shown with: <input value={filter} onChange={handleFilterChange}/>
        </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filter === '' ? persons.map((person) => <Number key={person.name} name={person.name} number={person.number}/>)}
    </div>
  )
}

export default App