React Employee Manager
A small React + Redux app for managing employees (Problem 2 of Week-3 assessment).
Tech
- React (Vite)
- Redux Toolkit
- React-Redux
- Hooks: useRef, useState, useSelector, useDispatch
Features
- Add employee via uncontrolled inputs (useRef) -> dispatch ADD_EMPLOYEE
- List employees from Redux store
- Update role to "Manager" via UPDATE_EMPLOYEE
Getting Started
1. Install dependencies:

npm install
2. Start development server:

npm run dev
Build
Run the build:

npm run build
Structure
src/
  main.jsx
  App.jsx
  store/
    index.js
    employeesSlice.js
  components/
    EmployeeInput.jsx
    EmployeeList.jsx
