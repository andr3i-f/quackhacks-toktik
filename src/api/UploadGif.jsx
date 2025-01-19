import React, { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config


export function UploadGif({gif, name, setUploadGif, uploadGif}) {
    const backendUrl = `${BACKEND}/gifs`;
    console.log(uploadGif)
    useEffect(() => { 
        // api
         setUploadGif(false)
    }, 
    [gif, name, setUploadGif, uploadGif])
 
  
  
 return (
     <Text>Hello World</Text>
   );
}

