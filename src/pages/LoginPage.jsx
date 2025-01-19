import { Text, Alert, AlertIcon, Box, Button, FormControl, FormLabel, Input, Heading, Spinner, Fade } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import { loginUser } from "../api/loginUser";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null); // null, "success", or "error"
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (email && password) {
      await loginUser(email, password)
        .then((response) => {
          if (response.success) {
            console.log(response)
            setStatus("success");
            login(response.name)
            navigate("/player")

          } else {
            setStatus("error");
          }
        })
        .catch((error) => {
          console.error("Error during API call:", error);
          setStatus("error");
        })
        .finally(() => {
          setLoading(false);
        });
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
            <Button
              colorScheme="blue"
              width="100%"
              type="submit"
              isLoading={loading}
            >
              Login
            </Button>
          </form>
          <Box mt={4}>
            {status === "success" && (
              <Fade in>
                <Alert
                  status="success"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="200px"
                  borderRadius="lg"
                >
                  <AlertIcon boxSize="40px" mr={0} />
                  <Heading as="h4" size="md" mt={4} mb={1}>
                    Login Successful!
                  </Heading>
                  <Text>Welcome back! Redirecting...</Text>
                </Alert>
              </Fade>
            )}
            {status === "error" && (
              <Fade in>
                <Alert status="error" borderRadius="lg">
                  <AlertIcon />
                  Incorrect email or password. Please try again.
                </Alert>
              </Fade>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default LoginPage;
