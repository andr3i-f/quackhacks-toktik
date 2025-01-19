import {
    Text,
    Button,
    IconButton,
    Flex,
    Link
  } from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex
        as="header"
        w="100%"
        px={4}
        py={2}
        alignItems="center"
        justifyContent="space-between"
        bg="gray.100"
      >
        <IconButton aria-label="TokTik Icon" icon={<Text><Link href="/home">TokTik</Link></Text>} />

        <Flex gap={2}>
          <Button>Useless #1</Button>
          <Button>Useless #2</Button>
          <Button>Useless #3</Button>
        </Flex>
      </Flex>
  )
}

export default NavBar