import axios from "axios";

export function getUserData() {
  try {
    const response = axios.get("https://jsonplaceholder.typicode.com/users");
    return response;
  } catch (error) {
    return error;
  }
}
