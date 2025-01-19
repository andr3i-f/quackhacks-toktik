import {
  Image,
  Button,
  IconButton,
  Flex,
  Link,
  Text,
  Box,
  Avatar,
} from "@chakra-ui/react";
import { AiFillTikTok } from "react-icons/ai";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";

function NavBar() {
  const user  = sessionStorage.getItem("authUser")

  useEffect(() => {

  }, [user])

  return (
    <Flex
      as="header"
      w="100%"
      px={4}
      py={6}
      alignItems="center"
      justifyContent="space-between"
      bg="gray.100"
      gap={2}
    >
      <Link href="/home">
        <Flex alignItems="center" gap={2}>
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
          <Text textStyle="7x1" fontWeight="bold">
            TokTik
          </Text>
        </Flex>
      </Link>

      <Flex gap={2} align="center">
        <Link href="/upload" passHref legacyBehavior>
          <Button as="a">Upload Gif</Button>
        </Link>

        {!user ? (
          <Box>
            <Link href="/account" passHref legacyBehavior>
              <Button as="a" mr={2}>
                Sign Up
              </Button>
            </Link>
            <Link href="/login" passHref legacyBehavior>
              <Button as="a">Log In</Button>
            </Link>
          </Box>
        ) : (
          <Flex align="center" gap={2}>
            <Text>Welcome {user.replaceAll('"', "")}!</Text>
            <Avatar />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}

export default NavBar;
