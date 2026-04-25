import { useState } from 'react'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import AddStudentForm from './components/AddStudentForm'
import './App.css'

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Aarav', score: 78 },
    { id: 2, name: 'Diya', score: 36 },
    { id: 3, name: 'Karan', score: 54 },
  ])

  const handleScoreChange = (id, nextScore) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, score: nextScore } : student,
      ),
    )
  }

  const handleAddStudent = (name, score) => {
    setStudents((prevStudents) => [
      ...prevStudents,
      { id: Date.now(), name, score },
    ])
  }

  return (
    <main className="app-container">
      <Header />
      <AddStudentForm onAddStudent={handleAddStudent} />
      <StudentTable students={students} onScoreChange={handleScoreChange} />
    </main>
  )
}

export default App
