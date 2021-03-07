import React from 'react'
import { StyledButton } from './button.style'

export const Button = ({ children, click }) => {
  return (
    <StyledButton onClick={click}>{children}</StyledButton>
  )
}
