
import React from 'react'
import styled from '@emotion/styled'
import { QuotaChart } from './quota-chart'

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

const QuotaChartWrapper = styled.div`
`

const productDetails = [
  "Processor - Intel Core i5 8265U",
  "Screen size - 15.6 Inch Full HD Screen",
  "RAM - 8GB",
  "SSD - 256GB",
  "Operating System - Windows 10 Pro",
  "Warranty - 1 year warranty",
  "Graphic Type - Integrated",
]

const QuotaAndConsoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`

const QuotaWrapper = styled.div`
  margin: 20px;
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
        <ul>
          {productDetails.map((detail, i) => <li key={i}>{detail}</li>)}
        </ul>
      </DetailsWrapper>
    </Flex>
    <QuotaAndConsoleWrapper>
      <QuotaWrapper>
        <QuotaChart booked={10} quota={10} />
      </QuotaWrapper>
      <Button>Order</Button>
    </QuotaAndConsoleWrapper>
  </Flex>
