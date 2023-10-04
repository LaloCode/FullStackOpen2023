import { useState } from 'react'

const Number = ({name}) => {
  return <p>{name}</p>
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    if (persons.some((person => person.name === newName))) {
      alert(`${newName} is already added to the phonebook`)
      return
    }
    setPersons(persons.concat({name: newName}))
    setNewName('')
  } 

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <Number  key={person.name} name={person.name}/>)}
    </div>
  )
}

export default App