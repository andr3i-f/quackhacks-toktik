import { Text, Box, Image } from "@chakra-ui/react";
import axios from "axios";
import { BACKEND } from "../Config";
import { getGif } from "../api/gifGetter";
import { useState, useEffect } from "react";

async function getGifsFunc(name, setFileData) {
  try {
    const data = await getGif(name);
    console.log(data);
    setFileData(data[0].gifData); 
  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
}

export default function GetGifs() {
  const name = "emoji-meme.gif"; 
  const [fileData, setFileData] = useState(null);

  useEffect(() => {
    getGifsFunc(name, setFileData);
  }, [name]); 
  return (
    <Box>
    
      {fileData ? (
        <Image src={fileData} alt="GIF" />
      ) : (
        <Text>Brainrot loading...</Text> 
      )}
    </Box>
  );
}
