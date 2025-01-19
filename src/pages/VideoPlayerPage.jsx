import GetGifs from "../components/GetGifs";
import NavBar from "../components/NavBar";
import VideoPlayer from "../components/VideoPlayer";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from "@chakra-ui/react";

export const VideoPlayerPage = () => {
  return (
    <Box>
      <NavBar />
      <GetGifs />
    </Box>
  );
};
