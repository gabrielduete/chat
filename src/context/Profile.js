import React, { createContext, useState, useContext } from "react"

const ProfileContext = createContext()

export default function ProfileProvider({ children }) {
  const [userSets, setUserSets] = useState([])

  return (
    <ProfileContext.Provider value={{ userSets, setUserSets }}>
      {children}
    </ProfileContext.Provider>
  )
}

export function useProfile() {
  const context = useContext(ProfileContext)

  const { userSets, setUserSets } = context

  return { userSets, setUserSets }
}
