import { BACKEND } from "../Config"; // Your backend URL config
import axios from "axios";

export async function loginUser(email, password) 
{
  const backendUrl = `${BACKEND}/login`
  const { data } = await axios.post(backendUrl, {
    'email': email, 
    'password': password
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}