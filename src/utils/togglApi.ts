import axios from "axios";

export const fetchTimeLog = async () => {
  try {
    const response = await axios.get("/api/toggl");
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API route:", error);
    return [];
  }
};
