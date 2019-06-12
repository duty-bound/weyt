
import React from 'react'
import styled from '@emotion/styled'
import { QuotaChart } from './quota-chart'

const productDetails = [
  "Processor - Intel Core i5 8265U",
  "Screen size - 15.6 Inch Full HD Screen",
  "RAM - 8GB",
  "SSD - 256GB",
  "Operating System - Windows 10 Pro",
  "Warranty - 1 year warranty",
  "Graphic Type - Integrated",
]

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const ImageWrapper = styled.div`
`

const DetailsWrapper = styled.div`
`

const QuotaPriceWrapper = styled.div`
`

const QuotaPrice = styled.span`
  font-size: 2.5em;
  color: RGB(100, 100, 150);
`

const Ul = styled.ul`
  padding-left: 0;
  list-style-position: inside;
`

const QuotaAndConsoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`

const QuotaWrapper = styled.div`
  margin: 20px;
`

const QuotaChartWrapper = styled.div`
`

const buttonHeight = 40;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: RGB(100, 100, 150);
  border: none;
  border-radius: 20px;
`

export const Deal = (props) =>
  <Flex>
    <Flex>
      <ImageWrapper>
        <img src='../images/laptop.jpg' alt="image not found"/>
      </ImageWrapper>
      <DetailsWrapper>
        <QuotaPriceWrapper>
          <QuotaPrice>€300</QuotaPrice>
        </QuotaPriceWrapper>
        <Ul>
          {productDetails.map((detail, i) => <li key={i}>{detail}</li>)}
        </Ul>
      </DetailsWrapper>
    </Flex>
    <QuotaAndConsoleWrapper>
      <QuotaWrapper>
        <QuotaChart booked={10} quota={10} />
      </QuotaWrapper>
      <Button>Order</Button>
    </QuotaAndConsoleWrapper>
  </Flex>
