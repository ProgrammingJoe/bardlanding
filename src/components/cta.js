import React, { useState } from "react"
import styled from "styled-components"
import { ItemHeader, Text, SubText } from "./typography"
import axios from "axios"
import PrimaryButton from "./buttons/primary-button"

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.cta.background};
  border-radius: 8px;
  padding: 60px 18px;
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: 5rem 0px;
  gap: 12px;
  align-items: center;

  h4,
  p {
    color: ${({ theme }) => theme.colors.cta.font};
  }

  p {
    max-width: 400px;
    margin: auto;
  }

  input {
    border: ${({ theme }) => `1px solid ${theme.colors.card.border}`};
    background-color: white;
  }
`

const Form = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  justify-content: center;
  margin-top: 18px;

  input,
  button {
    border-radius: 6px;
  }

  input {
    height: 42px;
    padding: 0px 6px;
    max-width: 290px;
    width: 80%;
  }

  button {
    height: 40px;
    padding: 0px 12x;
  }

  @media (max-width: 440px) {
    flex-direction: column;
    gap: 12px;
    align-items: stretch;

    button,
    a {
      align-self: center;
    }

    input {
      width: 100%;
      max-width: 440px;
    }
  }
`

const CTA = ({ header, subHeader, appLink }) => {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const subscribeToMoosend = async () => {
    try {
      setMessage("")
      await axios.post(
        `https://web-production-11db1.up.railway.app/api/website-email-subscription/`,
        {
          email,
        }
      )
      setMessage("Thank you! You're all signed up!")
    } catch (err) {
      setMessage("It didn't work, let me know or try again!")
    }
  }

  return (
    <Wrapper>
      <ItemHeader>{header}</ItemHeader>
      <Text>{subHeader}</Text>
      {appLink ? (
        <a href="https://bard.art/" target="_blank" rel="noopener noreferrer">
          <PrimaryButton>Go to Bard</PrimaryButton>
        </a>
      ) : (
        <>
          <Form>
            <input
              type="text"
              name="email"
              id={`${header}-email`}
              value={email}
              placeholder="Enter email"
              onChange={e => setEmail(e.target.value)}
            />
            <PrimaryButton onClick={() => subscribeToMoosend()}>
              Subscribe
            </PrimaryButton>
          </Form>
          <SubText>{message}</SubText>
        </>
      )}
    </Wrapper>
  )
}

export default CTA
