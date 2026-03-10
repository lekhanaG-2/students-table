import React from 'react';

const StudentTable = ({ students, onEdit, onDelete, loading }) => {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading students...</p>
      </div>
    );
  }

  if (!students || students.length === 0) {
    return (
      <div className="empty-state">
        <p>No students found. Add a student to get started!</p>
      </div>
    );
  }

  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={student.id || index}>
            <td>{index + 1}</td>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>{student.age}</td>
            <td>
              <div className="action-buttons">
                <button 
                  onClick={() => onEdit(student)} 
                  className="btn-edit"
                >
                  Edit
                </button>
                <button 
                  onClick={() => onDelete(student)} 
                  className="btn-delete"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;

