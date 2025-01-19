import {
  Box,
  Text,
  Heading,
  Container,
  Button,
  VStack,
  Image,
  Icon,
  Progress,
  HStack,
  Input,
} from "@chakra-ui/react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaCloudUploadAlt } from "react-icons/fa";
import { uploadGif } from "../api/uploadGif";
import NavBar from "./NavBar";

export function CreateGif() {
  const [rawFile, setRawFile] = useState(null);
  const [actualFile, setActualFile] = useState(null);
  const [title, setTitle] = useState("")

  const uploadDataOnSubmit = async () => {
    console.log('calling api')
    console.log(title)
    if (title) {
      await uploadGif(rawFile, actualFile.name, title)
    }
  };

  const undoUpload = () => {
    setActualFile(null); 
    setRawFile(null);// Clear the file
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]
    setActualFile(file)
    const reader = new FileReader();
    reader.onloadend = () => {
      const rawData = reader.result;
      setRawFile(rawData)
    };
    reader.readAsDataURL(file)    
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box bg="gray.100" minH="100vh">
      <NavBar />
      <Box py="50" />

      {/* Page Header */}
      <Container maxW="container.md" textAlign="center" mb="8">
        <Heading fontSize="3xl" mb="4" color="teal.500">
          Create and Upload Your GIF
        </Heading>

        <Text color="gray.600">
          Upload content for others to waste their lives and rot their brains
          with!
        </Text>
        <Box py="5" />
      </Container>

      {/* File Upload Section */}
      <Container
        maxW="container.sm"
        bg="white"
        p="8"
        py="50"
        borderRadius="md"
        shadow="md"
      >
        <VStack spacing="6">
          <Box
            {...getRootProps()}
            bg="gray.50"
            border="2px dashed"
            borderColor={isDragActive ? "teal.400" : "gray.300"}
            p="6"
            w="100%"
            textAlign="center"
            borderRadius="md"
            _hover={{ bg: "gray.100", cursor: "pointer" }}
          >
            <input {...getInputProps()} />
            <Icon as={FaCloudUploadAlt} boxSize="10" color="teal.500" mb="3" />
            <Text fontSize="sm" color="gray.600">
              {isDragActive
                ? "Drop the file here..."
                : "Drag and drop your file here, or click to select"}
            </Text>
          </Box>

          {/* Display File Info */}
          {rawFile && (
            <Box textAlign="center" position="relative">
              {/* Undo Button positioned on the top-right corner */}
              <HStack>
              <Text fontWeight="bold">{actualFile.name}</Text>
              <Button
                position="absolute"
                top="0"
                right="0"
                size="sm"
                color="gray"
                onClick={undoUpload}
                aria-label="Undo Upload"
              >
                X
              </Button>
              </HStack>
              <Image
                src={rawFile}
                alt="Uploaded GIF"
                borderRadius="md"
                maxH="200px"
                mt="4"
              />
            </Box>
          )}
          <Input isDisabled={!rawFile} placeholder={"Enter title for gif . . ."} value={title} onChange={(e) => setTitle(e.target.value) }/>
          {/* Upload Button */}
          <Button
            colorScheme="teal"
            isDisabled={!rawFile}
            onClick={uploadDataOnSubmit}
            width="full"
          >
            Upload GIF
          </Button>
        </VStack>
      </Container>

      {/* Progress Section
      {(
        <Container maxW="container.sm" mt="8">
          <Heading fontSize="lg" mb="4" color="gray.600" textAlign="center">
            Upload Progress
          </Heading>
          <Progress
            value={50}
            colorScheme="teal"
            size="sm"
            borderRadius="md"
          />
          <Text fontSize="sm" color="gray.600" textAlign="center" mt="2">
            Uploading... 50% Complete
          </Text>
        </Container>
      )} */}

      {/* Footer Section */}
      <Box bg="gray.400" h="10vh" w="100vw" marginTop="4.5%">
        <Container maxW="container.md" textAlign="center" color="white">
          <Text fontSize="sm" paddingTop="3.5%">
            By uploading, you agree to sell your soul to us.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
