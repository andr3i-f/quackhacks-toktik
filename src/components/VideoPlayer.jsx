import {
  Text,
  Box,
  Image,
  Center,
  IconButton,
  VStack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { getGifIndex } from "../api/gifGetIndex";
import { handleLikeDislike } from "../api/handleLikeDislike";
import { getHandleLikeDislike } from "../api/handleLikeDislike";
import axios from "axios";

// Function to fetch GIF data
async function getGifsFunc(index, setData) {
  try {
    const data = await getGifIndex(index);
    setData(data);
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
}



export function VideoPlayer() {
  const [index, setIndex] = useState(0);
  const [fileData, setData] = useState(null);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    getGifsFunc(index, setData);
  }, [index]);

  useEffect(() => {
    if (fileData) {
      const fetchLikesDislikes = async () => {
        const { likes, dislikes } = await getHandleLikeDislike(fileData.name);
        setLikes(likes);
        likedislikeHandler(fileData.name, false)
        console.log(likes, dislikes)
        setDislikes(dislikes);
      };
      fetchLikesDislikes();
    }
  }, [fileData]); // Triggered whenever fileData changes


  const likedislikeHandler = async (name, isLike) => {
    // Use the name from fileData to call handleLikeDislike
    if (fileData) {
      // After handling like/dislike, fetch updated likes/dislikes
      const { likes, dislikes } = await getHandleLikeDislike(name, isLike);
      setLikes(likes);
      setDislikes(dislikes);
    }
  };

  return (
    <Box
      w="100%"
      h="100vh"
      bgGradient="linear(to-b, black, gray.900)"
      position="relative"
    >
      {/* Video Content */}
      <Center h="100%">
        <Flex align="center" justify="center" w="80%" maxW="500px" gap="5">
          {/* Video Box */}
          <Box
            w="80%"
            maxW="350px"
            aspectRatio="9/16"
            position="relative"
            overflow="hidden"
            rounded="3xl"
            bg="black"
          >
            {fileData && (
              <Heading color={"white"} textAlign={"center"}>
                {fileData.title}
              </Heading>
            )}

            {fileData ? (
              <Image
                src={fileData.gifData}
                alt="GIF"
                objectFit="cover"
                rounded="3xl"
                w="100%"
                h="100%"
              />
            ) : (
              <Text color="white" fontSize="lg" textAlign="center">
                Loading...
              </Text>
            )}
          </Box>

          {/* Action Buttons */}
          <VStack spacing={5} align="center">
            <ScrollUp setIndex={setIndex} index={index} />
            <ScrollDown setIndex={setIndex} index={index} />
            <LikeButton
              initialLikes={likes}
              setInitialLikes={setLikes}
              name={fileData?.name}
            />
            <DislikeButton
              initialDislikes={dislikes}
              onDislike={() => likedislikeHandler(false)}
            />
          </VStack>
        </Flex>
      </Center>
    </Box>
  );
}

// Scroll Up Button
function ScrollUp({ setIndex, index }) {
  const onClick = () => {
    setIndex(index + 1);
  };
  return (
    <IconButton
      aria-label="Scroll Up"
      icon={<ArrowUpIcon />}
      size="lg"
      colorScheme="gray"
      variant="outline"
      onClick={onClick}
    />
  );
}

// Scroll Down Button
function ScrollDown({ setIndex, index }) {
  const onClick = () => {
    setIndex(index > 0 ? index - 1 : 0);
  };
  return (
    <IconButton
      aria-label="Scroll Down"
      icon={<ArrowDownIcon />}
      size="lg"
      colorScheme="gray"
      variant="outline"
      onClick={onClick}
    />
  );
}

// Like Button
function LikeButton({ initialLikes, setInitialLikes, name }) {

  const onClick = () => {
    setInitialLikes(initialLikes + 1)
    console.log(name)
    handleLikeDislike(name, true)
  }

  return (
    <VStack spacing={1} align="center">
      <IconButton
        aria-label="Like Video"
        icon={<RiThumbUpFill />}
        size="lg"
        colorScheme="white"
        variant="solid"
        onClick={onClick} // Call handleLike on click
      />
      <Text color="white" fontSize="sm">
        {initialLikes}
      </Text>
    </VStack>
  );
}

// Dislike Button
function DislikeButton({ initialDislikes, onDislike }) {
  const [dislikes, setDislikes] = useState(initialDislikes || 0);

  const handleDislike = () => {
    setDislikes(dislikes + 1);
    onDislike(); // Call the parent function to update the dislikes in the backend
  };

  return (
    <VStack spacing={1} align="center">
      <IconButton
        aria-label="Dislike Video"
        icon={<RiThumbDownFill />}
        size="lg"
        colorScheme="white"
        variant="solid"
        onClick={handleDislike} // Call handleDislike on click
      />
      <Text color="white" fontSize="sm">
        {dislikes}
      </Text>
    </VStack>
  );
}

export default VideoPlayer;
