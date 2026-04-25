import StudentRow from './StudentRow'

function StudentTable({ students, onScoreChange }) {
  return (
    <section className="table-card">
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <StudentRow
              key={student.id}
              student={student}
              onScoreChange={onScoreChange}
            />
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default StudentTable
