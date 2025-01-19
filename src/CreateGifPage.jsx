import {
  Box,
  Text,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Image
} from "@chakra-ui/react";
import { useState, useEffect, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CreateUser } from "./api/CreateUser";
import axios from "axios";
import { BACKEND } from "./Config"; // Your backend URL config
import { useDropzone } from "react-dropzone";

export function CreateGifPage() {
    const [ fileName, setFileName ] = useState("");
    const [ file, setFile ] = useState(null);

    console.log(file.path)

    const uploadDataOnSubmit = () => {

    }

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles)
    setFileName(acceptedFiles[0].name)
    setFile(acceptedFiles[0])
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bg="gray.100"
    >
      <VStack borderWidth={"3px"} borderColor={"black"} p={5}>
        <Box borderWidth={"3px"} borderColor={"black"} p={5}>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag 'n' drop some files here, or click to select files</p>
              )}
            </div>
        </Box>
        {fileName && <Text>{fileName}</Text>}
        {<Button isDisabled={!fileName} colorScheme="blue" onSubmit={uploadDataOnSubmit}>Upload</Button>}
        {file && <Image src={URL.createObjectURL(file)} alt={"Gif"}></Image>}
      </VStack>
    </Box>
  );
}
