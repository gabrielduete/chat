import React from "react"

import * as S from "./styles"

const Home = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>CHAT BIRUTA</S.Title>
        <S.Subtitle>join to use chat</S.Subtitle>
      </S.Header>
      <S.Form>
        <S.InputName type="text" placeholder="Type you name..." />
        <S.InputImage id="files" type="file" class="hidden" />
        <S.LabelInput for="files">Send Photo</S.LabelInput>
        <S.InputJoin type="submit" value="JOIN" />
      </S.Form>
    </S.Wrapper>
  )
}

export default Home
