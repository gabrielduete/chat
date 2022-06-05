import React, { useState } from "react"
import { useProfile } from "../../context/Profile"

import * as S from "./styles"

const Home = () => {
  const [userPhoto, setUserPhoto] = useState()
  const [userName, setUserName] = useState("")
  const [namePhoto, setNamePhoto] = useState()

  const { userSets, setUserSets } = useProfile()

  const handleGetValues = () => {
    setUserSets({
      ...userSets,
      name: userName,
      photo: userPhoto,
    })
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

        <S.ButtonJoin to="/chat" onClick={handleGetValues}>
          JOIN
        </S.ButtonJoin>
      </S.Form>
    </S.Wrapper>
  )
}

export default Home
