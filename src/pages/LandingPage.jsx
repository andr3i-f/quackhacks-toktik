import {
  Heading,
  Text,
  Container,
  Box,
  Button,
  Link,
  Flex,
  Grid,
  GridItem,
  VStack,
  HStack,
  Avatar,
  Image,
} from "@chakra-ui/react";
import toktikImage from "../images/toktik.jpg"; // Adjust the path
import abdullah from "../images/abdullah.jpg";
import mujtaba from "../images/mujtaba.png";
import andrei from "../images/andrei.jpg";
import musa from "../images/musa.png";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import { getMostPopular } from "../api/getMostPopular"; // Ensure this function is correctly set up

export function LandingPage() {
  const [popularGIFs, setPopularGIFs] = useState([]);

  const listPopulator = async () => {
    try {
      // Fetch the top 6 most popular GIFs by calling the API for indices 0 to 5
      const fetchedGIFs = await Promise.all(
        Array.from({ length: 6 }).map(async (_, index) => {
          const gifData = await getMostPopular(index); // Passing index to fetch specific GIF
          return gifData;
        })
      );

      // Set the fetched GIFs to state
      setPopularGIFs(fetchedGIFs);
      console.log(fetchedGIFs)
    } catch (error) {
      console.error("Error fetching popular GIFs:", error);
    }
  };

  useEffect(() => {
    listPopulator();
  }, []); // Empty dependency array ensures this runs once on component mount

  const captors = [
    {
      idx: 0,
      name: "Andrei Florea",
      username: "andr3i-f",
      image_link: andrei,
    },
    {
      idx: 1,
      name: "Abdullah Havaldar",
      username: "abd00l4h",
      image_link: abdullah,
    },
    {
      idx: 2,
      name: "Mujtaba Ali",
      username: "MujtabaAliProjects",
      image_link: mujtaba,
    },
    {
      idx: 3,
      name: "Musa Ahmed",
      username: "M005A",
      image_link: musa,
    },
  ];

  return (
    <>
      <NavBar />

      {/* Hero Section */}
      <Box
        backgroundImage={`url(${toktikImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        w="100vw"
        h="100vh"
        position="relative"
        _before={{
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bg: "rgba(0, 0, 0, 0.6)", // Overlay for better text contrast
        }}
      >
        <Flex
          direction="column"
          align="center"
          justify="center"
          w="100%"
          h="100%"
          position="relative"
        >
          <Container textAlign="center" maxW="container.md">
            <Heading
              marginBottom="4"
              color="white"
              fontSize={{ base: "3xl", md: "5xl" }}
            >
              Welcome to TokTik
            </Heading>
            <Text color="gray.300" fontSize={{ base: "md", md: "xl" }}>
              Enjoy Hours of Wasted Time
            </Text>
            <Link href="/player">
              <Button
                marginTop="6"
                size="lg"
                bg="teal.400"
                color="white"
                _hover={{ bg: "teal.500" }}
                shadow="md"
              >
                Start Wasting Your Time
              </Button>
            </Link>
          </Container>
        </Flex>
      </Box>

      {/* Trending Content Section */}
      <Box py="16" bg="white">
        <Container maxW="container.lg">
          <Heading textAlign="center" mb="8">
            Trending Now
          </Heading>
          <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="6">
            {popularGIFs.length > 0 ? (
              popularGIFs.map((gif, index) => (
                <GridItem
                  key={gif.name}
                  bg="gray.100"
                  p="6"
                  borderRadius="md"
                  shadow="sm"
                  _hover={{
                    shadow: "md",
                    transform: "scale(1.02)",
                    transition: "all 0.2s",
                  }}
                >
                  <Box h="150px" bg="gray.300" mb="4" borderRadius="md">
                    <Image src={gif.gifData} alt={`GIF ${index + 1}`} objectFit="cover" w="100%" h="100%" borderRadius="md" />
                  </Box>
                  <Text fontWeight="bold" mb="2">
                    {gif.name}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {gif.title || "Some description of the trending content."}
                  </Text>
                </GridItem>
              ))
            ) : (
              <Text>Loading trending GIFs...</Text>
            )}
          </Grid>
        </Container>
      </Box>

      {/* Founders Section */}
      <Box py="16" bg="gray.50">
        <Container maxW="container.lg">
          <Heading textAlign="center" mb="8">
            Your Captors
          </Heading>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
            gap="6"
          >
            {captors.map((item, index) => (
              <GridItem key={index} textAlign="center">
                <VStack align={"center"}>
                  <Image
                    height={"100px"}
                    width={"100px"}
                    borderRadius="40"
                    src={item.image_link}
                    size="xl"
                  />
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text fontSize="sm" color="gray.600">
                    @{item.username}
                  </Text>
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Footer Section */}
      <Box bg="gray.800" color="gray.400" py="6">
        <Container maxW="container.md" textAlign="center">
          <Text
            fontSize="xs"
            fontWeight="light"
            textAlign="center"
            lineHeight="tall"
          >
            TokTik is not responsible for any brain damage, sleep apnea, lack of
            sleep, thirst, hunger, or even death due to use of the website.
            &copy; {new Date().getFullYear()} TokTik
          </Text>
        </Container>
      </Box>
    </>
  );
}
