import styled from "styled-components"

export const Contain = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.section`
  width: 500px;
  height: 700px;
  padding: 10px;
  position: relative;

  background-color: var(--black-strong);
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Form = styled.form`
  width: 90%;
  margin: 10px;
  align-self: center;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const WrapperMessage = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.id ? "row" : "row-reverse")};
  align-self: ${(props) => (props.id ? "flex-end" : "flex-start")};

  margin-top: 10px;

  justify-content: ${(props) => (props.id ? "flex-end" : "flex-start")};
`

export const Message = styled.li`
  max-width: 245px;
  width: auto;
  margin: 10px;
  padding: 15px;

  background-color: ${(props) =>
    props.id ? "var(--blue-strong)" : "var(--black-weak)"};
  align-self: ${(props) => (props.id ? "flex-end" : "flex-start")};
  list-style: none;
  border-radius: 15px;
  border-bottom-left-radius: ${(props) => !props.id && 0};
  border-bottom-right-radius: ${(props) => props.id && 0};

  word-wrap: break-word;
`

export const InputMessage = styled.input`
  height: 40px;
  padding: 15px;
  width: 100%;
  outline: none;

  border: none;
  border-radius: 5px;
  background-color: var(--black);
  color: var(--white);
`

export const Photo = styled.img`
  width: 40px;
  height: 40px;
  margin: 40px ${(props) => (props.id ? "10px" : "0px")} 0 0;
  border-radius: 50%;
`

export const Text = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.2em;
`
