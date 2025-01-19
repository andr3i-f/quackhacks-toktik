import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateUser } from "./api/CreateUser";
import axios from "axios";
import { BACKEND } from "./Config"; // Your backend URL config

export function CreateAccountPage() {
  const [isSubmitted, setSubmitted] = useState(false);
  const backendUrl = `${BACKEND}/users`;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getData = () => {
    axios.get(backendUrl).then((response) => {
      console.log(response);
    });
  };

  const onSubmit = () => {
    setSubmitted((prev) => !prev); // Toggle the state
    getData()
  };

  useEffect(() => {
    console.log(isSubmitted); // Log the updated state value
    console.log(email);
    console.log(username);
    console.log(password);
  }, [isSubmitted]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      {isSubmitted ? (
        <CreateUser name={username} email={email} passwd={password} />
      ) : (
        <></>
      )}
      <Box>
        <Heading>Create Account for TokTik</Heading>
        <form onSubmit={onSubmit}>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Username</FormLabel>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password} // Bind value to the state
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" width="100%" type="submit">
            Create Account
          </Button>
          <Button onClick={getData}>Get data</Button>
        </form>
      </Box>
    </Box>
  );
}
