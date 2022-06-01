import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import { v4 as uuid } from "uuid"

import * as S from "./styles"

const myId = uuid()
const socket = io("http://localhost:8080", { transports: ["websocket"] })
socket.on("connect", () => console.log("New Connection"))

const Chat = () => {
  const [message, setMessage] = useState("")
  const [allMessages, setAllMessages] = useState([])

  useEffect(() => {
    const handleNewMessage = (newMessage) =>
      setAllMessages([...allMessages, newMessage])
    socket.on("chat.message", handleNewMessage)
    return () => socket.off("chat.message", handleNewMessage)
  }, [allMessages])

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (message.trim()) {
      socket.emit("chat.message", {
        id: myId,
        message,
      })
    }
    setMessage("")
  }

  const handleInputChange = (event) => setMessage(event.target.value)

  return (
    <S.Contain>
      <S.Wrapper>
        <S.List>
          {allMessages.map((m, idx) => (
            <S.Message key={idx} id={m.id === myId ? true : false}>
              {console.log(m.id)}
              {m.message}
            </S.Message>
          ))}
        </S.List>
        <S.Form onSubmit={handleFormSubmit}>
          <S.InputMessage
            type="text"
            placeholder="Type a new message here"
            value={message}
            onChange={handleInputChange}
          />
        </S.Form>
      </S.Wrapper>
    </S.Contain>
  )
}
export default Chat
