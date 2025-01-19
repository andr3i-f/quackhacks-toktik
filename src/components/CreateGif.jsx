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
} from "@chakra-ui/react";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { UploadGif } from "../api/UploadGif";
import { FaCloudUploadAlt } from "react-icons/fa";
import NavBar from "./NavBar";

export function CreateGif() {
  const [file, setFile] = useState(null);
  const [uploadGif, setUploadGif] = useState(false);

  const uploadDataOnSubmit = () => {
    console.log(URL.createObjectURL(file));
    setUploadGif(true);
  };

  const undoUpload = () => {
    setFile(null); // Clear the file
    setUploadGif(false); // Reset upload state
  };

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box bg="gray.100" minH="100vh" py="5" px="4">
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
          {file && (
            <Box textAlign="center" position="relative">
              {/* Undo Button positioned on the top-right corner */}
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
              <Text fontWeight="bold">{file.name}</Text>
              <Image
                src={URL.createObjectURL(file)}
                alt="Uploaded GIF"
                borderRadius="md"
                maxH="200px"
                mt="4"
              />
            </Box>
          )}

          {/* Upload Button */}
          <Button
            colorScheme="teal"
            isDisabled={!file}
            onClick={uploadDataOnSubmit}
            width="full"
          >
            Upload GIF
          </Button>

          {uploadGif && (
            <UploadGif
              gif={file}
              name={file.name}
              setUploadGif={setUploadGif}
              uploadGif={uploadGif}
            />
          )}
        </VStack>
      </Container>

      {/* Progress Section */}
      {uploadGif && (
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
      )}

      {/* Footer Section */}
      <Box bg="gray.400" py="6" mt="12">
        <Container maxW="container.md" textAlign="center" color="white">
          <Text fontSize="sm">
            By uploading, you agree to sell your soul to us.
          </Text>
        </Container>
      </Box>
    </Box>
  );
}
