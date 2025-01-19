import { Image, Button, IconButton, Flex, Link } from "@chakra-ui/react";
import { AiFillTikTok } from "react-icons/ai";

function NavBar() {
  return (
    <Flex
      as="header"
      w="100%"
      px={4}
      py={6}
      alignItems="center"
      justifyContent="space-between"
      bg="gray.100"
    >
      <Link href="/home">
        <IconButton
          aria-label="TokTik Icon"
          icon={
            <AiFillTikTok
              style={{
                transform: "scaleX(-1)",
              }}
            />
          }
          fontSize="48px"
          variant="ghost" 
        />
      </Link>

      <Flex gap={2}>
        <Link href="/upload" passhref legacyBehavior>
          <Button as="a">Upload Gif</Button>
        </Link>{" "}
        <Link href="/account" passhref legacyBehavior>
          <Button as="a">Sign Up</Button>
        </Link>
        <Link href="/login" passhref legacyBehavior>
          <Button as="a">Log In</Button>
        </Link>
      </Flex>
    </Flex>
  );
}

export default NavBar;
