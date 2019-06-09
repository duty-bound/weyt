import React from 'react'
import styled from '@emotion/styled'

const StyledHeader = styled.header`
  width: 100%;
  min-height: 100px;
  color: RGB(100, 100, 150); {/*is this still required?*/}
  background-color: RGB(30, 30, 30);
`

const H1 = styled.h1`
  font: 'arial';
  font-size: 72px;
  margin: 0px;
  padding-left: 30px;
`

export const Header = () =>
  <StyledHeader>
    <H1>weyt</H1>
  </StyledHeader>
