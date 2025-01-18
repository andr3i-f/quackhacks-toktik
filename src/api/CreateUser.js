import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { BACKEND } from "../Config";

// Construct backend URL using environment variable
const backendUrl = `${BACKEND}/users`;
console.log("Backend URL:", backendUrl);

export const CreateUser = ({ name, email, passwd }) => {
  // useEffect ensures that the API call is made once the component mounts
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
};
