import { useState } from 'react'

function AddStudentForm({ onAddStudent }) {
  const [name, setName] = useState('')
  const [score, setScore] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedName = name.trim()
    const numericScore = Number(score)
    if (!trimmedName || Number.isNaN(numericScore)) {
      return
    }

    onAddStudent(trimmedName, numericScore)
    setName('')
    setScore('')
  }

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <h2>Add New Student</h2>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter student name"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="score">Score</label>
        <input
          id="score"
          type="number"
          value={score}
          onChange={(event) => setScore(event.target.value)}
          placeholder="Enter score"
          min="0"
          max="100"
          required
        />
      </div>
      <button type="submit">Add Student</button>
    </form>
  )
}

export default AddStudentForm
