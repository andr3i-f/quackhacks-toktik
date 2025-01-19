import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config"; // Your backend URL config

export const CreateUser = ({ name, email, passwd }) => {
  // Construct backend URL using environment variable
  const backendUrl = `${BACKEND}/users`;

  // useEffect ensures that the API call is made once the component mounts
  useEffect(() => {
    const createUser = async () => {
      try {
        const response = await fetch(backendUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: passwd,
          }),
        });

        const data = await response.json();
        console.log("User created:", data);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    };

    createUser(); // Make the API call when the component mounts
  }, [name, email, passwd]); // The effect runs when props change

  return <Box>API Called...</Box>;
};
