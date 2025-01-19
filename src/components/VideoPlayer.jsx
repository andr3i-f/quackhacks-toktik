import { Text, Box, Image, Center, IconButton, VStack } from '@chakra-ui/react';
import { AddIcon, ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import gif from './giphy.gif'; // Import the GIF file

function VideoPlayer() {
    return (
        <Box w="100%" h="100vh" bg="black" position="relative">
            {/* Video Content */}
            <VideoContainer />

            {/* Scroll Buttons */}
            <ScrollUp />
            <ScrollDown />
            

        </Box>
    );
}

// Scroll Up Button
function ScrollUp() {
    return (
        <IconButton 
            aria-label="Scroll Up"
            icon={<ArrowUpIcon boxSize="4rem" />}
            size="lg"
            colorScheme="white" // Valid color scheme
            position="fixed"
            top="18%" // Adjust positioning
            right="48%" // Adjust positioning
            onClick={() => alert('Scrolled Up!')}
        />
    );
}

// Scroll Down Button
function ScrollDown() {
    return (
        <IconButton 
            aria-label="Scroll Down"
            icon={<ArrowDownIcon boxSize="4rem" />}
            size="lg"
            colorScheme="white" // Valid color scheme
            position="fixed"
            bottom="15%" // Adjust positioning
            right="48%" // Adjust positioning
            onClick={() => alert('Scrolled Down!')}
        />
    );
}

function LikeButton() {
    const [likes, setLikes] = useState(0); // Track the number of likes

    // Increment the like count
    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <VStack position="fixed" bottom="10%" right="10%" spacing={2}>
            {/* Like Count */}
            <Text color="white" fontSize="lg">{likes} Likes</Text>

            {/* Like Button */}
            <IconButton 
                aria-label="Like Video"
                icon={<ArrowUpIcon size="24px" />}
                size="lg"
                colorScheme="teal"
                onClick={handleLike}
            />
        </VStack>
    );
}
// Video Container Component
function VideoContainer() {
    return (
        <Center>
            <Box position="relative" display="inline-block">
                <Image
                    src={gif}
                    alt="Example GIF"
                    marginTop="40%"
                />
            </Box>
        </Center>
    );
}



export default VideoPlayer;
