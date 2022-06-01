import React from "react"
import bio from "networks"

import * as S from "./styles"

const User = () => {
  const user = {
    name: "@gabrielduete",
    age: "20",
    job: "Trainee Software engineer in JSM",
    study: "S.I in IFCE",
    religion: "Jesus Follower",
    nation: "Brazilian", // Cearense
  }

  return (
    <S.Wrapper>
      <S.Title>Hey! 👋 </S.Title>
      <S.WrapperText>
        {bio.show(() => {
          if (user.play()) {
            return <S.Text>do not disturb 👀</S.Text>
          } else {
            return user.code() ? (
              <S.Text>building applications with my keyboard 🤖</S.Text>
            ) : (
              <S.Text>
                in gym, reading, writing, watching, or... sleeping? 💤
              </S.Text>
            )
          }
        })}
      </S.WrapperText>
    </S.Wrapper>
  )
}

export default User
