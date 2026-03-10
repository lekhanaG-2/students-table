import React from 'react';

const DeleteConfirmDialog = ({ student, onConfirm, onCancel }) => {
  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete the student "{student.name}"?</p>
        <p className="warning">This action cannot be undone.</p>
        <div className="dialog-actions">
          <button className="confirm-delete-btn" onClick={onConfirm}>
            Delete
          </button>
          <button className="cancel-delete-btn" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmDialog;

