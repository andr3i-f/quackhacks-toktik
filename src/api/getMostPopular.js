import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config
import axios from "axios";

export async function getMostPopular(index) {
  const backendUrl = `${BACKEND}/gifs/mostpopular`;
  
  try {
    const { data } = await axios.get(backendUrl, {
      params: {
        index: index,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching popular GIF:", error);
    throw error; // Re-throw the error to handle it in the calling function if needed
  }
}
