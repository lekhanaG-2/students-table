# Students Table – React CRUD Application

[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS](https://img.shields.io/badge/CSS-3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-000000.svg)](https://lekhanaG-2.github.io/students-table/)

A modern React application for managing student records with full CRUD operations, built with React hooks and localStorage for data persistence.

## Features

- ✅ Add new students with form validation
- ✅ Edit existing student information
- ✅ Delete students with confirmation dialog
- ✅ Search students by name, email, or age
- ✅ Download student data as Excel file
- ✅ Responsive design for mobile and desktop
- ✅ Data persistence using localStorage

## Tech Stack

- **React 18.2.0** - Frontend framework with hooks
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Responsive styling
- **XLSX** - Excel file generation library
- **localStorage API** - Client-side data persistence
- **GitHub Pages** - Static site hosting

## React Architecture

This application follows React best practices with:

- **Functional Components** with React Hooks
- **Component-based Architecture**:
  - `App.js` - Main application component
  - `StudentForm.js` - Form for adding/editing students
  - `StudentTable.js` - Table display component
  - `DeleteConfirmDialog.js` - Confirmation dialog component
- **State Management** using useState and useEffect hooks
- **Props-based Communication** between components
- **Event Handling** for user interactions

## Live Demo

[View Live Application](https://lekhanaG-2.github.io/students-table/)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lekhanaG-2/students-table.git
cd students-table
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── StudentTable.js      # Main table component
│   ├── StudentForm.js       # Add/Edit form
│   └── DeleteConfirmDialog.js # Delete confirmation
├── App.js                   # Main application component
├── App.css                  # Main styles
└── index.js                 # Application entry point
```

## Usage

1. **Add Student**: Click "Add Student" button and fill the form
2. **Edit Student**: Click the "Edit" button next to any student
3. **Delete Student**: Click "Delete" and confirm in the dialog
4. **Search**: Use the search box to filter students
5. **Download Excel**: Click "Download Excel" to export data

## Form Validation

- Name: Required, cannot be empty
- Email: Required, must be valid email format
- Age: Required, must be between 1-150

## Data Storage

Student data is stored locally in the browser using localStorage, so your data persists between sessions.

## Contributing

This is a personal project for learning React development.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
