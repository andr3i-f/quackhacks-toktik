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
  })
  return data;
}

// export const CreateUser = ({ name, email, passwd }) => {
//   // Construct backend URL using environment variable
//   const backendUrl = `${BACKEND}/users`;


//   useEffect(() => {
//     const createUser = async () => {
//       try {
//         const { data } = axios.post(backendUrl, {
//           'name': name,
//           'email': email,
//           'password': passwd
//         }, {
//           headers: {
//             "Content-Type": "application/json"
//           }
//         })
//         // const response = await fetch(backendUrl, {
//         //   method: "POST",
//         //   headers: {
//         //     "Content-Type": "application/json",
//         //   },
//         //   body: JSON.stringify({
//         //     name: name,
//         //     email: email,
//         //     password: passwd,
//         //   }),
//         // });

//         console.log("User created: ")
//         console.log(data)
//       } catch (error) {
//         console.error("Error creating user:", error);
//       }
//     };

//     createUser(); // Make the API call when the component mounts
//   }, [name, email, passwd, backendUrl]); // The effect runs when props change

//   return <></>;
// };
