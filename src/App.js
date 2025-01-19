import logo from "./logo.svg";
import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import { CreateAccountPage } from "./CreateAccountPage";
import UploadGif from "./api/UploadGif";
import { CreateGifPage } from "./CreateGifPage";

function App() {
  return (
    <Box>
      <CreateGifPage/>
    </Box>
  );
}

export default App;
