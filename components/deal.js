
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

export const Deal = (props) =>
  <Flex>
    <Flex>
      <ImageWrapper>
        <img src='../images/laptop.jpg' alt="image not found"/>
      </ImageWrapper>
      <DetailsWrapper>
        <ul>
          {productDetails.map(detail => <li>{detail}</li>)}
        </ul>
      </DetailsWrapper>
    </Flex>
    <QuotaChart booked={10} quota={10} />
  </Flex>
