import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config
import axios from "axios";

export async function getGif(name) 
{
  const backendUrl = `${BACKEND}/gifs`
  const { data } = await axios.get(backendUrl, {
    params: {
        'name': name
    }
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}