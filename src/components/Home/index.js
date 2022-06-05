import React from "react"
import { useProfile } from "../../context/Profile"

import * as S from "./styles"

const Home = () => {
  const { userSets, setUserSets } = useProfile()

  const handleGetValues = (event, name, photo) => {
    event.preventDefault()

    console.log("a")
    setUserSets({
      ...userSets,
      name,
      photo,
    })
  }

  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>CHAT BIRUTA</S.Title>
        <S.Subtitle>join to use chat</S.Subtitle>
      </S.Header>
      <S.Form>
        <S.InputName type="text" placeholder="Type you name..." />
        <S.InputImage id="files" type="file" />
        <S.LabelInput htmlFor="files">Send Photo</S.LabelInput>
        <S.InputJoin type="submit" value="JOIN" onClick={handleGetValues} />
      </S.Form>
    </S.Wrapper>
  )
}

export default Home
