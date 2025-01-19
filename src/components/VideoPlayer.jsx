import { Text, Box, Image, Center, IconButton, VStack, HStack } from '@chakra-ui/react';
import { AddIcon, ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { RiThumbUpFill, RiThumbDownFill  } from "react-icons/ri";
import { MdOutlineComment } from "react-icons/md";
import { useState } from 'react';
import gif from './giphy.gif'; // Import the GIF file

export function VideoPlayer() {

    return (
         <Box w="100%" h="100vh" bg="black" position="relative">

            {/* <VerticalDivider /> */}
            {/* Video Content */}
            <VideoContainer />

            {/* Scroll Buttons */}
            <ScrollUp />
            <ScrollDown />

            {/* Like & Dislike Buttons */}
            <LikeButton />
            <DislikeButton />
            
            <CommentButton />


            

        </Box>
    );
}

// Video Container Component
function VideoContainer() {
    return (
        <Center>
            <Box position="relative" display="inline-block">
                <Image
                   rounded="md" src={gif}
                    alt="Example GIF"
                    marginTop="40%"
                />
            </Box>
        </Center>
    );
}



// Scroll Up Button
function ScrollUp() {
    return (
        <IconButton 
            aria-label="Scroll Up"
            icon={<ArrowUpIcon boxSize="2rem" />}
            size="lg"
            colorScheme="Gray" // Valid color scheme
            position="fixed"
            top="25%" // Adjust positioning
            right="31%" // Adjust positioning
            onClick={() => alert('Scrolled Up!')}
        />
    );
}

// Scroll Down Button
function ScrollDown() {
    return (
        <IconButton 
            aria-label="Scroll Down"
            icon={<ArrowDownIcon boxSize="2rem" />}
            size="lg"
            colorScheme="white" // Valid color scheme
            position="fixed"
            top ="34%" // Adjust positioning
            right="31%" // Adjust positioning
            onClick={() => alert('Scrolled Down!')}
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
        <HStack  position="fixed" 
        bottom="48%" 
        right="30%" 
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
function DislikeButton(){
    const [dislikes, setDislikes] = useState(0); //track # of dislikes

    //increment
    const handleDislike = () => {
        setDislikes(dislikes + 1);
    };

    return(
        <HStack position="fixed" bottom="38%" right="30%" spacing={1}>
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

function CommentButton(){
    const [comments, setComments] = useState(0); //track # of comments

    //increment
    const handleComments = () => {
        setComments(comments + 1);
    }

    return(
        <HStack position="fixed" bottom="28%" right="30%" spacing={1}>
           
            <IconButton 
                aria-label="Comment"
                icon={<MdOutlineComment  size="2rem" />}
                size="lg"
                colorScheme="Gray"
                onClick={handleComments}
            />
            {/* Display the number of likes */}
        <Text color="white" fontSize="10px">{comments}</Text>
        </HStack>
    );
}

