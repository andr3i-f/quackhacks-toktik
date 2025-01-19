import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config
import axios from "axios";

export async function createUser(name, email, password) 
{
  const backendUrl = `${BACKEND}/users`
  const { data } = await axios.post(backendUrl, {
    'name': name,
    'email': email, 
    'password': password
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}
