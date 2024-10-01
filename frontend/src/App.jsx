import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import Createpage from "./pages/Createpage";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/create" element={<Createpage />}></Route>
        </Routes>
      </Box>
    </>
  );
}

export default App;
