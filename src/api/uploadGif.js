import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config
import axios from "axios";

export async function uploadGif(gif, name, setUploadGif, uploadGif) 
{
    const backendUrl = `${BACKEND}/gifs`;
    useEffect(() => { 
        // api
         setUploadGif(false)
    }, 
    [gif, name, setUploadGif, uploadGif])
}
