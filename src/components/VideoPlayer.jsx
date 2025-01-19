import { Text, Box, Image, Center, IconButton, VStack, HStack, Flex } from '@chakra-ui/react';
import { AddIcon, ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { MdOutlineComment } from "react-icons/md";
import { useEffect, useState } from 'react';
import { getGifIndex } from '../api/gifGetIndex';

async function getGifsFunc(index, setFileData) {
    try {
        const data = await getGifIndex(index);
        setFileData(data.gifData)
    } catch (error) {
        console.error("Error fetching GIF:", error);
    }
}

export function VideoPlayer() {
    const [index, setIndex] = useState(0)
    const [fileData, setFileData] = useState(null);

    useEffect(() => {
        getGifsFunc(index, setFileData)
    }, [index])

    console.log(fileData)

    return (
        <Box w="100%" h="100vh" bg="black" justifyContent={"center"} alignContent={"center"}>
            {/* <VerticalDivider /> */}
            {/* Video Content */}
            <Center>
                <Flex dir={"row"} align={"center"}>
                        <Box position="relative">
                            <Image
                                rounded="md" src={fileData}
                                alt="Example GIF"
                                marginTop="40%"
                            />
                        </Box>
                    {/* Scroll Buttons */}
                    <VStack>
                        <ScrollUp setIndex={setIndex} index={index} />
                        <ScrollDown setIndex={setIndex} index={index} />
                        {/* Like & Dislike Buttons */}
                        <LikeButton />
                        <DislikeButton />
                        <CommentButton />
                    </VStack>
                </Flex>
            </Center>
        </Box>
    );
}

// Scroll Up Button
function ScrollUp({ setIndex, index }) {
    const onClick = () => {
        setIndex(index + 1)
    }
    console.log(typeof (setIndex))
    return (
        <IconButton
            aria-label="Scroll Up"
            icon={<ArrowUpIcon boxSize="2rem" />}
            size="lg"
            colorScheme="Gray" // Valid color scheme
            onClick={onClick}
        />
    );
}

// Scroll Down Button
function ScrollDown({ setIndex, index }) {
    const onClick = () => {
        if (index - 1 < 0) {
            setIndex(0)
        } else {
            setIndex(index - 1)
        }
    }
    return (
        <IconButton
            aria-label="Scroll Down"
            icon={<ArrowDownIcon boxSize="2rem" />}
            size="lg"
            colorScheme="white" // Valid color scheme
            onClick={onClick}
        />
    );
}

// Like Button
function LikeButton() {
    const [likes, setLikes] = useState(0); // Track the number of likes

    // Increment the like count
    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <HStack 
            spacing={1} // Adjust spacing between the number and button
            align="center" // Center the items in the stack
        >
            {/* Display the number of likes */}

            {/* Like Button */}
            <IconButton
                aria-label="Like Video"
                icon={<RiThumbUpFill size="2rem" />}
                size="lg"
                colorScheme="Gray" // Changed to a valid color scheme
                onClick={handleLike}
            />
            <Text color="white" fontSize="10px">{likes}</Text>

        </HStack>
    );
}

// Dislike Button
function DislikeButton() {
    const [dislikes, setDislikes] = useState(0); //track # of dislikes

    //increment
    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    return (
        <HStack spacing={1}>
            {/* Like Count */}
            {/* Like Button */}
            <IconButton
                aria-label="Dislike Video"
                icon={<RiThumbDownFill size="2rem" />}
                size="lg"
                colorScheme="Gray"
                onClick={handleDislike}
            />
            {/* Display the number of likes */}
            <Text color="white" fontSize="10px">{dislikes}</Text>
        </HStack>
    );
}

function CommentButton() {
    const [comments, setComments] = useState(0); //track # of comments

    //increment
    const handleComments = () => {
        setComments(comments + 1);
    }

    return (
        <HStack spacing={1}>

            <IconButton
                aria-label="Comment"
                icon={<MdOutlineComment size="2rem" />}
                size="lg"
                colorScheme="Gray"
                onClick={handleComments}
            />
            {/* Display the number of likes */}
            <Text color="white" fontSize="10px">{comments}</Text>
        </HStack>
    );
}

export default VideoPlayer;
