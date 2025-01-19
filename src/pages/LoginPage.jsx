import { Text } from "@chakra-ui/react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { loginUser } from "../api/loginUser";
import { useState } from "react";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    if (email && password) {
      await loginUser(email, password);
    }
  };
  return (
    <>
      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bg="gray.100"
      >
        <Box
          bg="white"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          maxWidth="400px"
          width="100%"
        >
          <Heading as="h2" size="lg" mb={6} textAlign="center">
            Login
          </Heading>
          <form onSubmit={onSubmit}>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
              />
            </FormControl>
            <Button colorScheme="blue" width="100%" type="submit">
              Login
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default LoginPage;
