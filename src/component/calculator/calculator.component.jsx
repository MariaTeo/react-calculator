import React, { useState } from 'react'
import { Button } from '../button'
import { Display } from '../display'


export const Calculator = () => {
  const [number, setNumber] = useState(5)
  const aduna = () => {
    setNumber(number + 1)
  }

  const scade = () => {
    setNumber(number - 1)
  }

  return (
    <div>
      <h1>Smart Calculator</h1>
      <Display number={number} />
      <Button click={aduna}>+</Button>
      <Button click={scade}>-</Button>
    </div>
  )
}
