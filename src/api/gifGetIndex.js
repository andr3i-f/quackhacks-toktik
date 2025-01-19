import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config
import axios from "axios";

export async function getGifIndex(index) 
{
  const backendUrl = `${BACKEND}/gifs/index`
  const { data } = await axios.get(backendUrl, {
    params: {
        'index': index
    }
  }, {
    headers: {
      "Content-Type": "application/json"
    }
  });
  return data;
}