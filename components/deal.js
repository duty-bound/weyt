
import React from 'react'
import styled from '@emotion/styled'
import { QuotaChart } from './quota-chart'

const DealWrapper = styled.div`
`

const Hr = styled.hr`
  width: 95%;
  margin: auto;
  margin-top: 10px;
  border: 0 5px 0 0;
`

const Title = styled.div`
  margin: 20px 0 0 40px;
`

const H3 = styled.h3`
  font-size: 2.4em;
  margin: 0;
  color: RGB(120, 120, 120);
`

const DealBodyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
`

const ImageWrapper = styled.div`
  padding: 0 30px 0 30px;
`

const DetailsWrapper = styled.div`
  margin-top: 20px;
`

const QuotaPriceWrapper = styled.div`
`

const QuotaPrice = styled.span`
  font-size: 2.5em;
  color: RGB(100, 100, 150);
`

const SavingDetail = styled.div`
  font-size: 1.4em;
  margin: 5px;
  color: grey;
`

const Ul = styled.ul`
  padding-left: 5px;
  list-style-position: inside;
  color: RGB(50, 50, 50);
`

const QuotaAndConsoleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const QuotaWrapper = styled.div`
  margin: 20px;
`

const QuotaChartWrapper = styled.div`
`

const Button = styled.button`
  width: 100%;
  height: 40px;
  background-color: RGB(100, 100, 150);
  border: none;
  border-radius: 20px;
`

export const Deal = (props) =>
  <DealWrapper>
    <Title>
      <H3>
        {props.deal.title}
      </H3>
    </Title>
    <DealBodyWrapper>
      <Flex>
        <ImageWrapper>
          <img src='../images/laptop.jpg' alt="image not found"/>
        </ImageWrapper>
        <DetailsWrapper>
          <QuotaPriceWrapper>
            <QuotaPrice>€322</QuotaPrice>
            <SavingDetail><span>Price on Supplier's website: €350</span></SavingDetail>
            <SavingDetail><span>Saving: €28 (8%)</span></SavingDetail>
          </QuotaPriceWrapper>
          <Ul>
            {props.deal.details.map((detail, i) => <li key={i}>{detail}</li>)}
          </Ul>
        </DetailsWrapper>
      </Flex>
      <QuotaAndConsoleWrapper>
        <QuotaWrapper>
          <QuotaChart booked={8} quota={10} />
        </QuotaWrapper>
        <Button>Order</Button>
      </QuotaAndConsoleWrapper>
    </DealBodyWrapper>
    <Hr />
  </DealWrapper>
