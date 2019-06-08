
import React from 'react'
import styled from '@emotion/styled'
import { QuotaChart } from './quota-chart'

const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  background-color: crimson;
  border: solid 1px black;
`

const ImageWrapper = styled.div`
  border: solid 3px yellow;
`

const DetailsWrapper = styled.div`
  border: solid 3px blue;
`

const QuotaChartWrapper = styled.div`
  border: solid 3px green;
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
  <React.Fragment>
  <Product>
    <ImageWrapper>
      <img src='../images/laptop.jpg' alt="image not found"/>
    </ImageWrapper>
    <DetailsWrapper>
      <ul>
        {productDetails.map(detail => <li>{detail}</li>)}
        {productDetails.map(detail => <li>{detail}</li>)}
        {productDetails.map(detail => <li>{detail}</li>)}
        {productDetails.map(detail => <li>{detail}</li>)}
        {productDetails.map(detail => <li>{detail}</li>)}
        {productDetails.map(detail => <li>{detail}</li>)}
        {productDetails.map(detail => <li>{detail}</li>)}
        {productDetails.map(detail => <li>{detail}</li>)}

      </ul>
    </DetailsWrapper>
    <QuotaChart booked={10} quota={10} />
  </Product>
  </React.Fragment>
