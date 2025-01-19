import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config
import axios from "axios";

export async function uploadGif(gif, name, title) 
{
    const backendUrl = `${BACKEND}/gifs`;
    const { data } = await axios.post(backendUrl, {
      'name': name,
      'gifData': gif,
      'title': title
    }, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    return data;
}
