import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config


const UploadGif = (gifPath, name) => {

   const backendUrl = `${BACKEND}/gifs`;
//    useEffect(() => {
//     //    const createUser = async () => {
//          try {
//             fs.readFile(gifPath, (err, data) => {

//             })
//         //     fs.readFile('path_to_your_gif.gif', (err, data) => {
//         //         if (err) {
//         //           console.log('Error reading the file:', err);
//         //           return;
//         //         })
    
//         //    const response = await fetch(backendUrl, {
//         //      method: "POST",
//         //      headers: {
//         //        "Content-Type": "application/json",
//         //      },
//         //      body: JSON.stringify({
//         //        name: name
//         //        data: 
//         //      }),
//         //    });
   
//         //    const data = await response.json();
   
//         //    console.log("User created:", data);
//         //  } catch (error) {
//         //    console.error("Error creating user:", error);
//         //  }
//     //    };
   
//     //    createUser(); // Make the API call when the component mounts
//      }, [gifPath, name, backendUrl]); // The effect runs when props change
   


 
 
return (

    <Box>
        gif
    </Box>

  );
};



export default UploadGif;
