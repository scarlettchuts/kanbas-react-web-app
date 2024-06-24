import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [] as any[],
  publishedCourses: [] as any[],
  enrolledCourses: [] as any[],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    // ========================== All Courses ==========================
    setCourses: (state, action) => {
      state.courses = action.payload;
    },
    addCourse: (state, action) => {
      const newCourse: any = {
        _id: action.payload._id,
        number: action.payload.number,
        name: action.payload.name,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        department: action.payload.department,
        credits: action.payload.credits,
        description: action.payload.description,
      };
      state.courses = [...state.courses, newCourse];
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (c: any) => c._id !== action.payload
      );
    },
    updateCourse: (state, action) => {
      state.courses = state.courses.map((c: any) =>
        c._id === action.payload._id ? action.payload : c
      );
    },

    // ========================== Published Courses ==========================
    setPublishedCourses: (state, action) => {
      state.publishedCourses = action.payload;
    },
    addPublishedCourse: (state, action) => {
      const newCourse: any = {
        _id: action.payload._id,
        number: action.payload.number,
        name: action.payload.name,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        department: action.payload.department,
        credits: action.payload.credits,
        description: action.payload.description,
      };
      state.publishedCourses = [...state.publishedCourses, newCourse];
    },
    deletePublishedCourse: (state, action) => {
      state.publishedCourses = state.publishedCourses.filter(
        (pc: any) => pc._id !== action.payload
      );
    },
    updatePublishedCourse: (state, action) => {
      state.publishedCourses = state.publishedCourses.map((pc: any) =>
        pc._id === action.payload._id ? action.payload : pc
      );
    },

    // ========================== Enrolled Courses ==========================
    setEnrolledCourses: (state, action) => {
      state.enrolledCourses = action.payload;
    },
    addEnrolledCourse: (state, action) => {
      const existingCourse = state.courses.find(
        (c) => c._id === action.payload
      );
      state.enrolledCourses = [...state.enrolledCourses, existingCourse];
    },
    deleteEnrolledCourse: (state, action) => {
      state.enrolledCourses = state.enrolledCourses.filter(
        (course) => course._id !== action.payload
      );
    },
  },
});

export const {
  setCourses,
  addCourse,
  deleteCourse,
  updateCourse,
  setPublishedCourses,
  addPublishedCourse,
  deletePublishedCourse,
  updatePublishedCourse,
  setEnrolledCourses,
  addEnrolledCourse,
  deleteEnrolledCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;
