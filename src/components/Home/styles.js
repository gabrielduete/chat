import styled from "styled-components"
import { Link } from "react-router-dom"

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 3.5em;
`

export const Subtitle = styled.p`
  font-size: 1.2em;
  font-style: italic;
  align-self: flex-end;
  color: var(--black-weak-2);
`

export const Form = styled.form`
  margin-top: 25px;
  width: 300px;
`

export const InputName = styled.input`
  height: 40px;
  padding: 15px;
  width: 100%;
  outline: none;

  border: none;
  border-radius: 5px;
  background-color: var(--black-strong);
  color: var(--white);
`

export const InputImage = styled.input`
  height: 40px;
  padding: 15px;
  margin-top: 10px;
  width: 100%;
  outline: none;
  display: none;

  border: none;
  border-radius: 5px;
  background-color: var(--black-strong);
  color: var(--white);
`

export const LabelInput = styled.label`
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  display: block;
  margin-top: 10px;
  text-align: center;

  background-color: var(--black-strong);
  color: var(--gray-strong);
  text-transform: uppercase;
  cursor: pointer;
`

export const ButtonJoin = styled(Link)`
  height: 45px;
  padding: 15px;
  margin-top: 10px;
  width: 100%;
  outline: none;
  display: block;
  text-align: center;
  text-decoration: none;

  border: none;
  border-radius: 5px;
  background-color: var(--blue-strong);
  color: var(--white);
  cursor: pointer;
`
