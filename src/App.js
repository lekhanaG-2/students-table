import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import StudentTable from './components/StudentTable';
import StudentForm from './components/StudentForm';
import DeleteConfirmDialog from './components/DeleteConfirmDialog';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [deleteStudent, setDeleteStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Load data from localStorage on app start
  useEffect(() => {
    const savedStudents = localStorage.getItem('students');
    if (savedStudents) {
      try {
        setStudents(JSON.parse(savedStudents));
        setLoading(false);
      } catch (error) {
        console.error('Error parsing saved students:', error);
        // Fallback to mock data if parsing fails
        setTimeout(() => {
          setStudents([
            { id: 1, name: 'John Doe', email: 'john@example.com', age: 20 },
            { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 22 },
            { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 19 },
          ]);
          setLoading(false);
        }, 1000);
      }
    } else {
      // Only show mock data if no saved data exists
      setTimeout(() => {
        const mockData = [
          { id: 1, name: 'John Doe', email: 'john@example.com', age: 20 },
          { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 22 },
          { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 19 },
        ];
        setStudents(mockData);
        localStorage.setItem('students', JSON.stringify(mockData));
        setLoading(false);
      }, 1000);
    }
  }, []);

  // Save to localStorage whenever students change
  useEffect(() => {
    if (students.length > 0) {
      localStorage.setItem('students', JSON.stringify(students));
    }
  }, [students]);

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.age.toString().includes(searchTerm)
  );

  const handleAddStudent = () => {
    setEditingStudent(null);
    setShowForm(true);
  };

  const handleEditStudent = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleSaveStudent = (studentData) => {
    if (editingStudent) {
      // Update existing student
      setStudents(prev => prev.map(s =>
        s.id === editingStudent.id ? { ...studentData, id: editingStudent.id } : s
      ));
      setSuccessMessage('Student updated successfully!');
    } else {
      // Add new student
      setStudents(prev => [...prev, { ...studentData, id: Date.now() }]);
      setSuccessMessage('Student added successfully!');
    }
    setShowForm(false);
    setEditingStudent(null);

    // Clear success message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleDeleteClick = (student) => {
    setDeleteStudent(student);
  };

  const confirmDelete = () => {
    if (deleteStudent) {
      setStudents(prev => prev.filter(s => s.id !== deleteStudent.id));
      setSuccessMessage('Student deleted successfully!');
      setDeleteStudent(null);

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  const handleDownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredStudents);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
    XLSX.writeFile(workbook, 'students.xlsx');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Students Table</h1>
        <p style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
          Total Students: {filteredStudents.length}
        </p>

        {successMessage && (
          <div style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '4px',
            marginBottom: '20px',
            textAlign: 'center'
          }}>
            {successMessage}
          </div>
        )}
        
        <div className="controls">
          <button className="btn-add" onClick={handleAddStudent}>
            + Add Student
          </button>
          
          <input
            type="text"
            placeholder="Search by name, email, or age..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          
          <button className="btn-download" onClick={handleDownloadExcel}>
            Download Excel
          </button>

          <button
            className="btn-clear"
            onClick={() => {
              if (window.confirm('Are you sure you want to clear all student data? This action cannot be undone.')) {
                setStudents([]);
                localStorage.removeItem('students');
              }
            }}
          >
            Clear All Data
          </button>
        </div>

        <StudentTable
          students={filteredStudents}
          loading={loading}
          onEdit={handleEditStudent}
          onDelete={handleDeleteClick}
        />

        {showForm && (
          <StudentForm
            student={editingStudent}
            onSave={handleSaveStudent}
            onCancel={() => {
              setShowForm(false);
              setEditingStudent(null);
            }}
          />
        )}

        {deleteStudent && (
          <DeleteConfirmDialog
            student={deleteStudent}
            onConfirm={confirmDelete}
            onCancel={() => setDeleteStudent(null)}
          />
        )}
      </div>
    </div>
  );
}

export default App;

