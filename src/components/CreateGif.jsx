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
  import { CreateUser } from "../api/CreateUser";
  import axios from "axios";
  import { BACKEND } from "../Config"; // Your backend URL config
  import { useDropzone } from "react-dropzone";
  import { UploadGif } from "../api/UploadGif";
  
  export function CreateGif() {
      const [ file, setFile ] = useState(null);
      const [ uploadGif, setUploadGif ] = useState(false);
  
      const uploadDataOnSubmit = () => {
          console.log(URL.createObjectURL(file))
          setUploadGif(true);
      }
  
    const onDrop = useCallback((acceptedFiles) => {
      setFile(acceptedFiles[0])
    }, []);
  
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    console.log(uploadGif)
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
          {file && <Text>{file.name}</Text>}
          {<Button isDisabled={!file} colorScheme="blue" onClick={uploadDataOnSubmit}>Upload</Button>}
          {file && <Image src={URL.createObjectURL(file)} alt={"Gif"}></Image>}
                {uploadGif && <UploadGif gif={file} name={file.name} setUploadGif={setUploadGif} uploadGif={uploadGif}/>}
        </VStack>
      </Box>
    );
  }
  