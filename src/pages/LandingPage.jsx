import {
  Heading,
  Text,
  Container,
  Box,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import toktikImage from "../images/toktik.jpg"; // Adjust the path
import NavBar from "../components/NavBar";

export function LandingPage() {
  return (
    <>
      <NavBar />

      <Box
        backgroundImage={`url(${toktikImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        w="100vw"
        h="100vh"
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          h="100%"
        >
          <Container textAlign="center">
            <Heading marginBottom="4" textColor="white">
              Welcome to TokTik
            </Heading>
            <Text textColor="white">Enjoy Hours of Wasted Time</Text>
            <Button marginTop="4">Start Wasting Your Time</Button>
          </Container>
        </Flex>
      </Box>

      <Flex bg="teal.300" w="100%" alignItems="center">
        <Container>
          <Heading marginTop="10%">Create an Account</Heading>
          <Text>Allow us to Steal your Data</Text>
          <Link href="/account" passHref legacyBehavior>
            <Button as="a">Create Account</Button>
          </Link>
        </Container>
      </Flex>

      <Box h="30%">
        <Container>
          <Text
            fontSize="2xs"
            fontWeight="light"
            textAlign="center"
            marginTop="25%"
            marginBottom="3%"
          >
            TokTik is not responsible for any brain damage, sleep apnea, lack of
            sleep, thrist, hunger, or even death due to use of the website
            (Copyright Symbol)
          </Text>
        </Container>
      </Box>
    </>
  );
}
