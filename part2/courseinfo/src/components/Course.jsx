/* eslint-disable react/prop-types */
const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Total = (props) => {
  return <p>Total of {props.sumOfExercises} exercises</p>
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sumOfExercises={course.parts.reduce((accumulator, currrentValue) => accumulator + currrentValue.exercises, 0)} />
    </div>
  )
}

export default Course