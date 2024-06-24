import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
// const QUIZZES_API = `${REMOTE_SERVER}/api/courses/${cid}/quizzes`

export const findQuizzesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${REMOTE_SERVER}/api/courses/${courseId}/quizzes`
  );
  return response.data;
};
