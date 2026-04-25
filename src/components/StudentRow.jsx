function StudentRow({ student, onScoreChange }) {
  const isPassed = student.score >= 40

  const handleChange = (event) => {
    const value = Number(event.target.value)
    onScoreChange(student.id, Number.isNaN(value) ? 0 : value)
  }

  return (
    <tr>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          min="0"
          max="100"
          className="score-input"
          value={student.score}
          onChange={handleChange}
        />
      </td>
      <td>
        <span className={isPassed ? 'status pass' : 'status fail'}>
          {isPassed ? 'Pass' : 'Fail'}
        </span>
      </td>
    </tr>
  )
}

export default StudentRow
