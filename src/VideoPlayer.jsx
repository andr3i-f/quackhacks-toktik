import { Box, Image, Center } from '@chakra-ui/react';
import gif from './giphy.gif'; // Import the GIF file

function VideoPlayer() {
    return (
        <Box w="100%" h="100vh" bg='black'>
            <Center>
                <Image 
                    src={gif}
                    marginTop="10%"
                    alt='Example GIF' 
                />
            </Center>
        </Box>
    );
}

export default VideoPlayer; // Default export
