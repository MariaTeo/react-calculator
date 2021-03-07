import React from 'react'
import { render } from 'react-dom'
import { Calculator } from './component/calculator'

const here = document.querySelector('#here')
const calculator = <Calculator />

render(calculator, here)
