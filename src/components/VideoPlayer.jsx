import {
  Text,
  Box,
  Image,
  Center,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { ArrowDownIcon, ArrowUpIcon } from "@chakra-ui/icons";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { MdOutlineComment } from "react-icons/md";
import { useEffect, useState } from "react";
import { getGifIndex } from "../api/gifGetIndex";

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

  useEffect(() => {
    getGifsFunc(index, setData);
  }, [index]);

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
            rounded="2xl"
            bg="black"
          >
            {fileData ? (
              <Image
                src={fileData.gifData}
                alt="GIF"
                objectFit="fit"
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
            <LikeButton />
            <DislikeButton />
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
function LikeButton() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <VStack spacing={1} align="center">
      <IconButton
        aria-label="Like Video"
        icon={<RiThumbUpFill />}
        size="lg"
        colorScheme="white"
        variant="solid"
        onClick={handleLike}
      />
      <Text color="white" fontSize="sm">
        {likes}
      </Text>
    </VStack>
  );
}

// Dislike Button
function DislikeButton() {
  const [dislikes, setDislikes] = useState(0);

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <VStack spacing={1} align="center">
      <IconButton
        aria-label="Dislike Video"
        icon={<RiThumbDownFill />}
        size="lg"
        colorScheme="white"
        variant="solid"
        onClick={handleDislike}
      />
      <Text color="white" fontSize="sm">
        {dislikes}
      </Text>
    </VStack>
  );
}

export default VideoPlayer;
