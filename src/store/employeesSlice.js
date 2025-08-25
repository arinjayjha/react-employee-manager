import { createSlice, nanoid } from '@reduxjs/toolkit';

const employeesSlice = createSlice({
  name: 'employees',
  initialState: [
    { id: 1, name: 'Arinjay', role: 'Developer' }
  ],
  reducers: {
    ADD_EMPLOYEE: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, role }) {
        return { payload: { id: Number(nanoid(6)), name, role } };
      }
    },
    UPDATE_EMPLOYEE(state, action) {
      const { id, name, role } = action.payload;
      const emp = state.find(e => e.id === id);
      if (emp) {
        if (name !== undefined) emp.name = name;
        if (role !== undefined) emp.role = role;
      }
    }
  }
});

export const { ADD_EMPLOYEE, UPDATE_EMPLOYEE } = employeesSlice.actions;
export default employeesSlice.reducer;
