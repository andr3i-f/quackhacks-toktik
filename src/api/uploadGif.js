import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config
import axios from "axios";

export async function uploadGif(gif, name) 
{
    const backendUrl = `${BACKEND}/gifs`;
    const { data } = await axios.post(backendUrl, {
      'name': name,
      'gifData': gif,
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return data;
}
