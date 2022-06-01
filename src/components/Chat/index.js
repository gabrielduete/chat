import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import { v4 as uuid } from "uuid"

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
    <>
      <h1>Chat</h1>
      <main>
        <ul>
          {allMessages.map((m, idx) => (
            <li key={idx}>{m.message}</li>
          ))}
        </ul>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type a new message here"
            value={message}
            onChange={handleInputChange}
          />
        </form>
      </main>
    </>
  )
}
export default Chat
