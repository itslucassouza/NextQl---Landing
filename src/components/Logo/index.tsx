import React from 'react'
import { LogoProps } from 'types/api'
import * as S from './styles'

const Logo = ({ alternativeText }: LogoProps) => (
  <S.LogoWrapper src="/img/logo.svg" alt={alternativeText} />
)

export default Logo
