import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import { Container } from "@mui/material"

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default App