import React from "react"
import Chat from "./components/Chat/index"
import Home from "./components/Home"
import GlobalStyles from "./styles/global"
import ProfileProvider from "./context/Profile"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <ProfileProvider>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </ProfileProvider>
  )
}

export default App
