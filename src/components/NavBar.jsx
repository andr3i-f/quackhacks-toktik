import { Text, Button, IconButton, Flex, Link } from "@chakra-ui/react";

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
      <IconButton
        aria-label="TokTik Icon"
        icon={
          <Text>
            <Link href="/home">TokTik</Link>
          </Text>
        }
      />

      <Flex gap={2}>
        <Link href="/login" passHref legacyBehavior>
          <Button as="a">Login</Button>
        </Link>{" "}
        <Link href="/upload" passHref legacyBehavior>
          <Button as="a">Upload Gif</Button>
        </Link>
        <Button>Useless #3</Button>
      </Flex>
    </Flex>
  );
}

export default NavBar;
