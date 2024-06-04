import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
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
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== action.payload.assignmentId
      );
    },

    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === action.payload._id ? action.payload : a
      );
    },

    //   editModule: (state, { payload: moduleId }) => {
    //     state.modules = state.modules.map((m: any) =>
    //       m._id === moduleId ? { ...m, editing: true } : m
    //     );
    //   },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
