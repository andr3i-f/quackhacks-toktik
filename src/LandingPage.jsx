import {
  Heading,
  Text,
  Container,
  Center,
  Box,
  Stack,
  Button,
  Image,
  IconButton,
  Flex,
} from "@chakra-ui/react";
//import toktikImage from toktik.jpg

export function LandingPage() {
  return (
    <>
      <Flex
        as="header"
        w="100%"
        px={4}
        py={2}
        alignItems="center"
        justifyContent="space-between"
        bg="gray.100"
      >
        <IconButton aria-label="TokTik Icon" icon={<Text>TokTik</Text>} />

        <Flex gap={2}>
          <Button>Useless #1</Button>
          <Button>Useless #2</Button>
          <Button>Useless #3</Button>
        </Flex>
      </Flex>

      <Flex bg="red.200" w="100%" alignItems="center">
        <Container>
          <Heading marginTop="20%">Welcome to TokTik</Heading>
          <Text>Enjoy Hours of Wasted Time</Text>
          <Button marginTop="2%" marginBottom="30%">Start Wasting Your Time</Button>
        </Container>
      </Flex>

      <Flex bg="teal.300" w="100%" alignItems="center">
        <Container>
          <Heading marginTop="10%">Create an Account</Heading>
          <Text>To Allow us to Steal your Data</Text>
          <Button marginTop="5%" marginBottom="10%">Womp Womp</Button>
        </Container>
      </Flex>

      <Box h="30%">
        <Container>
          <Text fontSize="2xs" fontWeight="light" textAlign="center" marginTop="30%">TokTik is not responsible for any brain damage, sleep apnea, lack of sleep, thrist, hunger, or even death due to use of the website (Copyright Symbol)</Text>
        </Container>
      </Box>
    </>
  );
}
