import logo from "./logo.svg";
import "./App.css";
import { Box, Text } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { LandingPage } from "./pages/LandingPage";
import { NoPage } from "./pages/NoPage";
import { CreateGifPage } from "./pages/CreateGifPage";
import { CreateAccountPage } from "./pages/CreateAccountPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/account' element={<CreateAccountPage />} />
          <Route path='/upload' element={<CreateGifPage />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
