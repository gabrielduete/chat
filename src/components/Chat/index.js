import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import ReactScrollableFeed from "react-scrollable-feed"
import { v4 as uuid } from "uuid"

import * as S from "./styles"

const myId = uuid()
const socket = io("http://localhost:8080", { transports: ["websocket"] })

const Chat = () => {
  const [message, setMessage] = useState("")
  const [allMessages, setAllMessages] = useState([])

  useEffect(() => {
    const handleNewMessage = (newMessage) =>
      setAllMessages([...allMessages, newMessage])

    socket.on("chat.message", handleNewMessage)

    return () => socket.off("chat.message", handleNewMessage)
  }, [allMessages])

  socket.on("data.user", (data) => {
    console.log("teste", data)
  })

  const handleSendMessage = (event) => {
    event.preventDefault()

    if (message.trim()) {
      socket.emit("chat.message", {
        message,
      })
    }

    setMessage("")
  }

  const handleInputChange = (event) => setMessage(event.target.value)

  return (
    <S.Contain>
      <S.Wrapper>
        <S.Text>You are talking to {}</S.Text>
        <ReactScrollableFeed forceScroll={true}>
          <S.List>
            {allMessages.map((m, idx) => (
              <S.WrapperMessage id={m.id === myId ? true : false}>
                <S.Message key={idx} id={m.id === myId ? true : false}>
                  {m.message}
                </S.Message>
                <S.Photo
                  src={"a"}
                  alt="image profile"
                  id={m.id === myId ? true : false}
                />
              </S.WrapperMessage>
            ))}
          </S.List>
        </ReactScrollableFeed>
        <S.Form onSubmit={handleSendMessage}>
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
