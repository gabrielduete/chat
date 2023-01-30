import React, { useState } from "react"
import io from "socket.io-client"
import { useNavigate } from "react-router-dom"
import { v4 as uuid } from "uuid"

import * as S from "./styles"

const myId = uuid()
const socket = io("http://localhost:8080", { transports: ["websocket"] })

const Home = () => {
  const [userPhoto, setUserPhoto] = useState()
  const [userName, setUserName] = useState("")
  const [namePhoto, setNamePhoto] = useState()
  const [styleWarning, setStyleWarning] = useState(false)

  const navigate = useNavigate()

  const handleSendUser = () => {
    socket.emit("get.data.user", { name: userName, photo: userPhoto, id: myId })
    navigate("/chat")
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    !!userName && !!userPhoto ? handleSendUser() : setStyleWarning(true)
  }

  const handleSendPhoto = (e) => {
    setUserPhoto(URL.createObjectURL(e.target.files[0]))
    setNamePhoto(e.target.files[0].name)
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>CHAT BIRUTA</S.Title>
        <S.Subtitle>join to use chat</S.Subtitle>
      </S.Header>
      <S.Form>
        <S.InputName
          type="text"
          placeholder="Type you name..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <S.InputImage
          id="files"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={(e) => handleSendPhoto(e)}
        />
        <S.LabelInput htmlFor="files">Send Photo</S.LabelInput>
        <S.Subtitle>{namePhoto}</S.Subtitle>
        <S.ButtonJoin type="submit" onClick={handleSubmit}>
          JOIN
        </S.ButtonJoin>
        <S.Text visible={styleWarning}>Please fill in the fields</S.Text>
      </S.Form>
    </S.Wrapper>
  )
}

export default Home
