import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [] as any[],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, action) => {
      const newAssignment: any = {
        // _id: new Date().getTime().toString(),
        title: action.payload.title,
        course: action.payload.course,
        description: action.payload.description,
        fromDate: action.payload.fromDate,
        untilDate: action.payload.untilDate,
        dueDate: action.payload.dueDate,
        points: action.payload.points,
      };
      state.assignments = [...state.assignments, newAssignment];
    },

    deleteAssignment: (state, action) => {
      console.log(action);
      console.log(action.payload);

      state.assignments = state.assignments.filter(
        (a: any) => a._id !== action.payload
      );
    },

    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === action.payload._id ? action.payload : a
      );
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
