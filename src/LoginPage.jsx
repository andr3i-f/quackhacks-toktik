import {Text} from '@chakra-ui/react';
import { Box, Button, FormControl, FormLabel, Input, Heading} from "@chakra-ui/react";

function LoginPage() {
  return (
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
        <form>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input type="email" placeholder="Enter your email" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Enter your password" />
          </FormControl>
          <Button colorScheme="blue" width="100%" type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default LoginPage;

