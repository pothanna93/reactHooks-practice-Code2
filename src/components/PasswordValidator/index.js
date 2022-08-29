import {useState} from 'react'
import {
  MainContainer,
  UserEnterDiv,
  Heading,
  Para,
  InputElement,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [name, setName] = useState('')
  const onChangeName = event => {
    setName(event.target.value)
  }
  const nameLength = name.length < 8

  return (
    <MainContainer>
      <UserEnterDiv>
        <Heading>Password Validator</Heading>
        <Para>Check how strong and secure is your password</Para>
        <InputElement type="password" value={name} onChange={onChangeName} />
        {nameLength && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </UserEnterDiv>
    </MainContainer>
  )
}
export default PasswordValidator
