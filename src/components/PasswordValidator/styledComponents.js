import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #24263c;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const UserEnterDiv = styled.div`
  border-radius: 8px;
  background-color: #434451;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 500px;
  }
`
export const Heading = styled.h1`
  font-size: 30px;
  font-family: 'Roboto';
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
export const Para = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #ffffff;
  margin: 0px;
  padding: 0px;
`
export const InputElement = styled.input`
  height: 34px;
  margin-top: 30px;
  width: 300px;
  border: none;
  outline: none;
  padding: 8px;
`
export const ErrorMsg = styled.p`
  color: #ef4444;
  text-align: center;
  font-family: 'Roboto';
`
